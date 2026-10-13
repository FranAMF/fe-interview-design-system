import type { StorybookConfig } from "@storybook/react-vite";
import { fileURLToPath, URL } from "node:url";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: ["@storybook/addon-links", "@storybook/addon-docs"],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  async viteFinal(config) {
    config.resolve ??= {};

    config.resolve.alias = {
      ...config.resolve.alias,
      "@": fileURLToPath(new URL("../src", import.meta.url)),
    };

    return config;
  },
};

export default config;
