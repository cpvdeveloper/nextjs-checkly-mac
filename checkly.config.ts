import { defineConfig } from "@checkly/cli";

const config = defineConfig({
  projectName: "Example Project for Checkly CLI with Next.js 13",
  logicalId: "checkly-cli-next-13",
  repoUrl: "https://github.com/cpvdeveloper/nextjs-checkly-mac/",
  checks: {
    locations: ["us-east-1", "eu-west-1"],
    tags: ["mac"],
    runtimeId: "2022.10",
    checkMatch: "**/*.check.ts",
    browserChecks: {
      testMatch: "**/__checks__/*.spec.ts", // this matches any Playwright spec-files and automagically creates a Browser check
    },
  },
  cli: {
    runLocation: "eu-west-1",
  },
});

export default config;
