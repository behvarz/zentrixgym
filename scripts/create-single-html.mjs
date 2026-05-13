import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import esbuild from "esbuild";

const rootDir = process.cwd();
const distClientDir = path.join(rootDir, "dist", "client");
const distIndexPath = path.join(distClientDir, "index.html");
const outputDir = path.join(rootDir, "single");
const outputPath = path.join(outputDir, "index.html");

function mimeFromExt(ext) {
  switch (ext.toLowerCase()) {
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".png":
      return "image/png";
    case ".webp":
      return "image/webp";
    case ".gif":
      return "image/gif";
    case ".svg":
      return "image/svg+xml";
    case ".css":
      return "text/css;charset=utf-8";
    default:
      return "application/octet-stream";
  }
}

function toDataUri(filePath) {
  const ext = path.extname(filePath);
  const mime = mimeFromExt(ext);
  const buf = readFileSync(filePath);
  return `data:${mime};base64,${buf.toString("base64")}`;
}

function runBuild() {
  const npmCmd = process.platform === "win32" ? "npm.cmd" : "npm";
  const result = spawnSync(npmCmd, ["run", "build"], {
    cwd: rootDir,
    stdio: "inherit",
    shell: false,
  });

  if (result.status === 0) return;

  if (!existsSync(distIndexPath)) {
    throw new Error("Build failed and dist/client/index.html was not generated.");
  }

  console.warn(
    "[single-html] Build returned non-zero but dist/client/index.html exists. Continuing single-file generation.",
  );
}

function buildAssetMap() {
  const assetsDir = path.join(distClientDir, "assets");
  const files = readdirSync(assetsDir);
  const map = new Map();

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (![".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg", ".css"].includes(ext)) {
      continue;
    }

    const abs = path.join(assetsDir, file);
    const webPath = `/assets/${file}`;
    map.set(webPath, toDataUri(abs));
  }

  return map;
}

function toSingleHtml() {
  let html = readFileSync(distIndexPath, "utf8");
  const assetMap = buildAssetMap();
  const scriptEntryMatch = html.match(
    /<script[^>]*>\s*import\((["'])(\/assets\/[^"']+\.js)\1\)\s*<\/script>/i,
  );

  if (!scriptEntryMatch) {
    throw new Error("Could not find client entry script import in dist/client/index.html");
  }

  const scriptEntryWebPath = scriptEntryMatch[2];
  const scriptEntryAbsPath = path.join(distClientDir, scriptEntryWebPath.replace(/^\/+/, ""));
  const bundledScript = esbuild
    .buildSync({
      entryPoints: [scriptEntryAbsPath],
      bundle: true,
      format: "iife",
      platform: "browser",
      target: ["es2020"],
      minify: true,
      write: false,
    })
    .outputFiles[0].text;

  let inlinedScript = bundledScript;

  for (const [webPath, dataUri] of assetMap) {
    html = html.split(webPath).join(dataUri);
    inlinedScript = inlinedScript.split(webPath).join(dataUri);
  }

  html = html.replace(/<link[^>]*rel="modulepreload"[^>]*>\s*/g, "");
  html = html.replace(/<script[\s\S]*?<\/script>\s*/g, "");
  const safeScript = inlinedScript.replace(/<\/script/gi, "<\\/script");
  html = html.replace(/<\/body>/i, `<script>${safeScript}</script></body>`);

  mkdirSync(outputDir, { recursive: true });
  writeFileSync(outputPath, html, "utf8");
}

runBuild();
toSingleHtml();
console.log(`[single-html] Ready: ${outputPath}`);
