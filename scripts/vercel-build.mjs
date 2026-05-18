import { existsSync } from "node:fs";
import { spawn } from "node:child_process";
import process from "node:process";

const child =
  process.platform === "win32"
    ? spawn("cmd.exe", ["/d", "/s", "/c", "npm run build"], {
        stdio: ["ignore", "pipe", "pipe"],
      })
    : spawn("sh", ["-lc", "npm run build"], {
        stdio: ["ignore", "pipe", "pipe"],
      });

let stdout = "";
let stderr = "";

child.stdout.on("data", (chunk) => {
  const text = chunk.toString();
  stdout += text;
  process.stdout.write(text);
});

child.stderr.on("data", (chunk) => {
  const text = chunk.toString();
  stderr += text;
  process.stderr.write(text);
});

child.on("close", (code) => {
  if (code === 0) {
    process.exit(0);
  }

  const hasClientOutput = existsSync("dist/client/index.html");
  const knownPrerenderTeardownError =
    stdout.includes("process.stdin.off is not a function") ||
    stderr.includes("process.stdin.off is not a function");

  if (hasClientOutput && knownPrerenderTeardownError) {
    console.warn(
      "[vercel-build] Known prerender teardown error ignored because dist/client/index.html exists.",
    );
    process.exit(0);
  }

  process.exit(code ?? 1);
});
