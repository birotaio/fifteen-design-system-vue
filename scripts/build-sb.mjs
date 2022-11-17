#!/usr/bin/env zx

await $`yarn build-storybook`;
await $`mkdir -p ./storybook-static/.storybook`;
await $`cp .storybook/logo.svg ./storybook-static/.storybook`;
