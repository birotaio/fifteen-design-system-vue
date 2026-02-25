#!/usr/bin/env zx

await $`pnpm build-storybook`;
await $`mkdir -p ./storybook-static/.storybook`;
await $`cp .storybook/logo.svg ./storybook-static/.storybook`;
