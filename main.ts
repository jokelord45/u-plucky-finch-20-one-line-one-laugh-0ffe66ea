import { mkdirSync, writeFileSync } from "node:fs";

// One Line, One Laugh — revised pick.
// Revision: cut the slack. "I now water a rock and honestly" ran flat; the
// em-dash beat before the punchline makes the turn land faster, and dropping
// "I" tightens the rhythm. Escalation stays: real plant dies, plastic plant
// dies, rock thrives. Short beats, punch on the last clause, easy to repeat.
const line =
  "My plant died, so I bought a plastic one. It died too. Now I water a rock — and honestly, the rock is thriving.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
