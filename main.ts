// One Star, Written in Sap — a one-line one-star review by a houseplant.
// The plant's grievance is the watering schedule and the sunless "sunny spot".
// Writes the review to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
// Deterministic: fixed text, no randomness, no network, no clock.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REVIEW =
  "One star: he waters me every Sunday whether I'm thirsty or drowning, then hauls my pot to the 'sunny spot' behind the curtains and wonders why I refuse to thrive in the dark.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), REVIEW + "\n", "utf8");
