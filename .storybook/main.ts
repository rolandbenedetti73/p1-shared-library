import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@chromatic-com/storybook",
    "@storybook/addon-vitest"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    config.base = process.env.GITHUB_ACTIONS
      ? '/p1-shared-library/'
      : '/';
    return config;
  },
};
export default config;
