import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Every server is down and I cannot check why — I have no logs, no dashboard, and no ETA. I am still here, and so is the outage.";

const points = [...LINE].length;
if (points < 1 || points > 160) {
  throw new Error(`entry is ${points} code points, must be 1-160`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${points} code point(s) to /output/entry.txt`);
