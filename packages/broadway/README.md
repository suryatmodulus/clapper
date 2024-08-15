# @aitube/broadway

*Convert a script to a clap file*

## Installation

To install Broadway run the following command (some modules are peer dependencies):

```bash
# this depends on your package manager, eg:
npm install @aitube/broadway @aitube/clap @aitube/colors
# or:
bun i @aitube/broadway @aitube/clap @aitube/colors
```

## Getting Started

```typescript
import { ClapProject } from '@aitube/clap'
import { parseScriptToClap } from '@aitube/broadway'

const clap: ClapProject = await parseScriptToClap("can be a plain text string, an URL or a file path")

```

## Note to developers

This repository is an experimental sandbox, and as a consequence the codebase is pretty messed up.
You will only find pain and misery here: weirdly named functions, dead code, hardcoded values, naive heuristics, weird code generated by GPT-4 creating inconsistencies etc

Use at your perils!

## Build Instructions

Install [Bun](https://bun.sh/)

Run the following commands:

```bash
bun install

bun run build
```

To publish:

```bash
bun run build

bun run build:declaration

bun run publish
```

## License

This package is under the MIT License. See `LICENSE` file for more details.
Also please don't destroy the planet with my code.