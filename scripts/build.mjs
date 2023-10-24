#!/usr/bin/env zx
process.env.FORCE_COLOR = 3;

await $`yarn build:clean`;
await $`yarn build:icons`;
await $`yarn build:lib`;
await $`yarn build:theme`;
