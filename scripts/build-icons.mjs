#!/usr/bin/env zx
import * as fs from 'fs/promises';
import * as path from 'path';
import { optimize } from 'svgo';
import { readFileSync } from 'fs';
import camelCase from 'camelcase';

const INPUT_ICONS_DIR = 'src/assets/icons';
const OUTPUT_UTILS_FILE = 'src/.generated/utils.ts';
const OUTPUT_ICONS_FILE = 'src/.generated/icons.ts';
const OUTPUT_FLAGS_FILE = 'src/.generated/flags.ts';
const OUTPUT_CREDIT_CARDS_FILE = 'src/.generated/credit-cards.ts';

function getIconsInfos(icons, casing) {
  return icons.map(url => {
    const name = path.basename(url, '.svg');
    const markup = readFileSync(url, 'utf-8');

    const casedName =
      casing === 'camelCase'
        ? camelCase(name)
        : casing === 'upperCase'
        ? name.toUpperCase()
        : name;

    const optimizedMarkup = optimize(markup, {
      plugins: [
        {
          name: 'removeXMLNS',
          active: true,
        },
        {
          name: 'removeXMLProcInst',
          active: true,
        },
        {
          name: 'removeAttrs',
          params: {
            attrs: 'svg:fill:none',
          },
          active: true,
        },
      ],
    }).data;

    return {
      name: casedName,
      markup: optimizedMarkup,
    };
  });
}

const iconUrls = await globby(`${INPUT_ICONS_DIR}/*`);
const icons = getIconsInfos(iconUrls, 'camelCase');

const flagIconURLs = await globby(`${INPUT_ICONS_DIR}/flags/*`);
const flagIcons = getIconsInfos(flagIconURLs, 'upperCase');

const creditCardIconsURLs = await globby(`${INPUT_ICONS_DIR}/credit-cards/*`);
const creditCardIcons = getIconsInfos(creditCardIconsURLs, 'camelCase');

const preamble = `
// This file is generated automatically. Do not edit manually.
// To update it, run \`yarn build:icons\`.
`;

const utilsFileContents = [
  preamble,
  `import type { CreditCardBrandId } from '@/utils/credit-cards';\n`,
  `import type { CountryCode, FlagCode } from '@/types/flags';`,
  `import type { Icon } from '@/types/icons';`,
  `const iconList = ${JSON.stringify(
    icons.map(icon => icon.name)
  )} as const;\n`,
  `export type IconName = typeof iconList[number];`,
  // expose this getter to ensure that, when needed, exported icon list is typed
  `export const getIconList = (): IconName[] => iconList.map(name => name as IconName)\n`,

  `const flagIconList = ${JSON.stringify(
    flagIcons.map(icon => icon.name)
  )} as const;\n`,
  `export const getFlagIconList = (): FlagCode[] => flagIconList.map(name => name as FlagCode)\n`,

  `const creditCardIconList: CreditCardBrandId[] = ${JSON.stringify(
    creditCardIcons.map(icon => icon.name)
  )};\n`,
  `export const getCreditCardIcons = () => creditCardIconList`,
  ,
];

const iconsFileContents = [
  preamble,
  ...icons.map(
    icon => `export const ${icon.name}: string = \`${icon.markup}\`;`
  ),
];

const flagsFileContents = [
  preamble,
  ...flagIcons.map(
    icon => `export const ${icon.name}: string = \`${icon.markup}\`;`
  ),
];

const creditCardsFileContents = [
  preamble,
  ...creditCardIcons.map(
    icon => `export const ${icon.name}: string = \`${icon.markup}\`;`
  ),
];

await fs.writeFile(OUTPUT_UTILS_FILE, utilsFileContents.join('\n'), {
  flag: 'w',
});

await fs.writeFile(OUTPUT_ICONS_FILE, iconsFileContents.join('\n'), {
  flag: 'w',
});

await fs.writeFile(OUTPUT_FLAGS_FILE, flagsFileContents.join('\n'), {
  flag: 'w',
});

await fs.writeFile(
  OUTPUT_CREDIT_CARDS_FILE,
  creditCardsFileContents.join('\n'),
  {
    flag: 'w',
  }
);

$.verbose = false;
await $`prettier ${OUTPUT_UTILS_FILE} --write`;
await $`prettier ${OUTPUT_ICONS_FILE} --write`;
await $`prettier ${OUTPUT_FLAGS_FILE} --write`;
await $`prettier ${OUTPUT_CREDIT_CARDS_FILE} --write`;
