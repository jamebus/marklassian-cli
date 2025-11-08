#!/usr/bin/env node

import { markdownToAdf } from 'marklassian';
import { text } from 'node:stream/consumers';

try {
  process.stdout.write(
    JSON.stringify(markdownToAdf(await text(process.stdin)))
  );
  process.stdout.write('\n');
} catch (error) {
  console.error(error);
  process.exitCode = 1;
}
