#!/usr/bin/env zx

// Build the lib first and separatly as it's responsible for dist folder cleaning
await $`yarn build:lib`;

await Promise.all([
  $`yarn build:icons`,
  $`yarn build:resolvers`,
  $`yarn build:rules`,
  $`yarn build:types`,
  $`yarn build:theme`,
  $`yarn build:router`,
]);
