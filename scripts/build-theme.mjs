#!/usr/bin/env zx
import * as fs from 'fs/promises';
import * as path from 'path';
import stylus from 'stylus';

const themeFile = path.resolve(__dirname, '../src/styles/theme.styl');
const outFile = path.resolve(__dirname, '../dist/theme.css');

const themeSource = await fs.readFile(themeFile, 'utf8');

stylus(themeSource)
  .set('paths', [path.resolve(__dirname, '../src/styles')])
  .render(function (err, css) {
    if (err) throw err;
    fs.writeFile(outFile, css, 'utf8');
  });
