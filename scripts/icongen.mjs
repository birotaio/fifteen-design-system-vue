#!/usr/bin/env zx
import { parse } from 'node-html-parser';
import camelCalse from 'camelcase';

const OUTPUT_UTILS_FILE = 'config/icons/.utils.ts';
const OUTPUT_LIST_FILE = 'config/icons/.icons.ts';

const iconUrls = await globby('assets/icons/design-system');

const icons = iconUrls.map(url => {
  const name = path.basename(url, '.svg');
  const data = fs.readFileSync(url, 'utf-8');
  const parsedSvg = parse(data);
  const paths = parsedSvg.querySelectorAll('path');
  return {
    name: camelCalse(name),
    paths: paths.map(path => path.attributes),
  };
});

const preamble = `
// This file is generated automatically. Do not edit manually.
// To update it, run \`yarn icongen\`.
`;

const utilsFileContents = [
  preamble,
  `const iconList = ${JSON.stringify(icons.map(icon => icon.name))} as const;

export type IconName = typeof iconList[number];
`,
  // expose this getter to ensures that, when needed, exported icon list is typed
  `export const getIconList = (): IconName[] => iconList.map(name => name as IconName)
`,
];

const listFileContents = [
  preamble,
  `import type { SVGAttributes } from 'vue';
  `,
  // expose each svg as its paths definition
  ...icons.map(
    icon =>
      `export const ${icon.name}: SVGAttributes[] = ${JSON.stringify(
        icon.paths
      )};`
  ),
];

await fs.writeFile(OUTPUT_UTILS_FILE, utilsFileContents.join('\n'), {
  flag: 'w',
});

await fs.writeFile(OUTPUT_LIST_FILE, listFileContents.join('\n'), {
  flag: 'w',
});

$.verbose = false;
await $`prettier ${OUTPUT_UTILS_FILE} --write`;
await $`prettier ${OUTPUT_LIST_FILE} --write`;
