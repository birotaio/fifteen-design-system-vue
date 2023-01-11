#!/usr/bin/env zx
import * as fs from 'fs/promises';
import * as path from 'path';
import { readFileSync } from 'fs';
import { parse } from 'node-html-parser';
import camelCase from 'camelcase';

const OUTPUT_UTILS_FILE = 'src/constants/icons/.utils.ts';
const OUTPUT_LIST_FILE = 'src/constants/icons/.icons.ts';

function getIconsInfos(icons, nameTocamelCase = true) {
  return icons.map(url => {
    const name = path.basename(url, '.svg');

    const data = readFileSync(url, 'utf-8');

    const parsedSvg = parse(data);
    const paths = parsedSvg.querySelectorAll('path');
    return {
      name: nameTocamelCase ? camelCase(name) : name,
      paths: paths.map(path => path.attributes),
    };
  });
}

const iconUrls = await globby('src/assets/icons/*');
const icons = getIconsInfos(iconUrls);

const flagIconURLs = await globby('src/assets/icons/country-flags/*');
const flagIcons = getIconsInfos(flagIconURLs);

const creditCardIconsURLs = await globby('src/assets/icons/credit-cards/*');
const creditCardIcons = getIconsInfos(creditCardIconsURLs, false);

const preamble = `
// This file is generated automatically. Do not edit manually.
// To update it, run \`yarn build:icons\`.
`;

const utilsFileContents = [
  preamble,
  `import type { CountryCode } from 'libphonenumber-js';`,
  `import type { CreditCardBrandId } from '@/helpers/credit-cards';\n`,
  `const iconList = ${JSON.stringify(
    icons.map(icon => icon.name)
  )} as const;\n`,
  `export type IconName = typeof iconList[number];`,
  // expose this getter to ensure that, when needed, exported icon list is typed
  `export const getIconList = (): IconName[] => iconList.map(name => name as IconName)`,

  `const flagIconList = ${JSON.stringify(
    flagIcons.map(icon => icon.name.toUpperCase())
  )} as const;\n`,
  `export const getFlagIconList = (): CountryCode[] => flagIconList.map(name => name as CountryCode)\n`,

  `const creditCardIconList: CreditCardBrandId[] = ${JSON.stringify(
    creditCardIcons.map(icon => icon.name)
  )};\n`,
  `export const getCreditCardIcons = () => creditCardIconList`,
  ,
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
