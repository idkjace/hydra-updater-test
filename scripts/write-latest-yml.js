const fs = require("fs");
const crypto = require("crypto");
const path = require("path");

const name = "hydra-update-dummy-9.9.9.txt";
const data = fs.readFileSync(path.join("feed", name));
const sha = crypto.createHash("sha512").update(data).digest("base64");
const released = new Date().toISOString();
const yml = [
  "version: 9.9.9",
  "files:",
  `  - url: ${name}`,
  `    sha512: ${sha}`,
  `    size: ${data.length}`,
  `path: ${name}`,
  `sha512: ${sha}`,
  `releaseDate: '${released}'`,
  "",
].join("\n");

fs.writeFileSync(path.join("feed", "latest.yml"), yml);
process.stdout.write(yml);
