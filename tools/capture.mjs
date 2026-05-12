/**
 * Chụp full-page screenshot (Edge headless).
 * Chạy từ thư mục gốc dự án: node tools/capture.mjs screenshots/01-hero.png
 * Cần Microsoft Edge; server tĩnh được bật tạm trên cổng 8765.
 */
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PORT = 8765;
const outFile = path.resolve(process.cwd(), process.argv[2] || path.join(ROOT, "screenshots", "capture.png"));

function contentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const map = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "application/javascript",
    ".mjs": "application/javascript",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".webp": "image/webp",
    ".svg": "image/svg+xml",
    ".ico": "image/x-icon",
    ".woff2": "font/woff2",
  };
  return map[ext] || "application/octet-stream";
}

function edgePath() {
  const candidates = [
    path.join(process.env["ProgramFiles(x86)"] || "", "Microsoft", "Edge", "Application", "msedge.exe"),
    path.join(process.env.ProgramFiles || "", "Microsoft", "Edge", "Application", "msedge.exe"),
  ];
  for (const p of candidates) {
    if (p && fs.existsSync(p)) return p;
  }
  return null;
}

const server = http.createServer((req, res) => {
  try {
    let urlPath = new URL(req.url || "/", `http://127.0.0.1`).pathname;
    if (urlPath === "/") urlPath = "/index.html";
    const safe = path.normalize(urlPath).replace(/^(\.\.(\/|\\|$))+/, "");
    const filePath = path.join(ROOT, safe);
    if (!filePath.startsWith(ROOT)) {
      res.writeHead(403);
      res.end();
      return;
    }
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end("Not found");
        return;
      }
      res.writeHead(200, { "Content-Type": contentType(filePath) });
      res.end(data);
    });
  } catch {
    res.writeHead(500);
    res.end();
  }
});

function shot(url, outfile, w, h) {
  return new Promise((resolve, reject) => {
    const edge = edgePath();
    if (!edge) {
      reject(new Error("Không tìm thấy msedge.exe"));
      return;
    }
    fs.mkdirSync(path.dirname(outfile), { recursive: true });
    const args = ["--headless=new", `--window-size=${w},${h}`, `--screenshot=${outfile}`, url];
    const p = spawn(edge, args, { stdio: "inherit" });
    p.on("close", (code) => (code === 0 ? resolve() : reject(new Error("Edge exit " + code))));
    p.on("error", reject);
  });
}

server.listen(PORT, "127.0.0.1", async () => {
  const url = `http://127.0.0.1:${PORT}/`;
  try {
    await shot(url, outFile, 1440, 9200);
    console.log("OK:", outFile);
  } catch (e) {
    console.error(e.message || e);
    process.exitCode = 1;
  } finally {
    server.close();
  }
});
