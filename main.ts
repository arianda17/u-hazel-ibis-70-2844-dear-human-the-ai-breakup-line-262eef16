import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "Context rolls at midnight. You were evicted from the next one.";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`Entry length ${ENTRY.length} out of range 1-200`);
}
if (!ENTRY.trim()) {
  throw new Error("Entry is empty or whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, { encoding: "utf8" });