#!/usr/bin/env zx
process.env.FORCE_COLOR = 3;

await $`pnpm build:clean`;
await $`pnpm build:icons`;
await $`pnpm build:lib`;
await $`pnpm build:theme`;
