/// <reference types="vitest" />

import path from 'path';
import { defineConfig } from 'vitest/config';

import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';

import { playwright } from '@vitest/browser-playwright';

export default defineConfig({
  plugins: [
    storybookTest({
      storybookScript: 'npm run storybook -- --ci',
    }),
  ],
  test: {
    browser: {
      enabled: true,
      name: 'chromium',
      provider: 'playwright',
      headless: true,
      screenshotFailures: false,
    },
    include: ['**/*.stories.?(m)[jt]s?(x)'],
    setupFiles: ['./.storybook/vitest.setup.ts'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
});
