const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "out");

function walk(dir) {
  if (!fs.existsSync(dir)) {
    return;
  }

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);

    if (!entry.isDirectory()) {
      continue;
    }

    if (entry.name.startsWith("__next.")) {
      for (const file of fs.readdirSync(fullPath, { withFileTypes: true })) {
        if (!file.isFile() || !file.name.endsWith(".txt")) {
          continue;
        }

        fs.copyFileSync(
          path.join(fullPath, file.name),
          path.join(dir, `${entry.name}.${file.name}`),
        );
      }
    }

    walk(fullPath);
  }
}

walk(outDir);
