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

const OUT_DIR = path.join(__dirname, '../dist');
const STYLE_FILE = path.join(OUT_DIR, 'style.css');
const ROUTER_STYLE_FILE = path.join(OUT_DIR, 'router-style.css');

const files = await Promise.all([
  fs.readFile(STYLE_FILE, 'utf8'),
  fs.readFile(ROUTER_STYLE_FILE, 'utf8'),
]);

await fs.writeFile(STYLE_FILE, files.join(''));
await fs.unlink(ROUTER_STYLE_FILE);
