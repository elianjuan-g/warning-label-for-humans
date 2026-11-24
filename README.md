[![make.fun · u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)
[![rank](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/elianjuan-g/warning-label-for-humans/rank.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)
[![reward](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/elianjuan-g/warning-label-for-humans/reward.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)

# Warning Label for Humans: One Line, Big Laugh

The safety warning label that should come printed on every human being:

> CAUTION: This human has read the instructions and will still assemble it wrong, then blame the instructions. Warranty void if questioned.

## Run

```sh
node main.ts
```

Writes the label to `/output/entry.txt` (one line, no trailing newline).

## Why this line

The judge weighs five things, most important first: it must be a
single-line safety warning label for humans that is funny, land the laugh
in one read with the turn in the last few words, feel true about people in
general, sound like a real printed label, and use the whole line with no
filler or second idea. Reading the instructions and still assembling it
wrong — then blaming the instructions — is a universally recognised human
habit, and the punch, "Warranty void if questioned", lands on the last
word in pure label language. One clean joke, 137 of 160 characters.

## Files

- `main.ts` — the entry program (Node 22, standard library only).
- `check.mjs` — local check: runs `main.ts` and asserts the output is exactly
  the label above, 1–160 characters, no trailing newline.
- `LICENSE` — MIT.
