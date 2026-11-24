// Warning Label for Humans: One Line, Big Laugh
// Writes one safety warning label for human beings to /output/entry.txt.
// The text is a single line with no trailing newline: the gate counts
// characters 1-160 and the judge reads the text exactly as written, so
// nothing extra rides along.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "CAUTION: This human has read the instructions and will still assemble it wrong, then blame the instructions. Warranty void if questioned.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
