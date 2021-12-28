import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src"],

  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },

  setupFilesAfterEnv: [
    "<rootDir>/src/setupTests.ts",
    // "@testing-library/react/cleanup-after-each",
    // "@testing-library/jest-dom/extend-expect",
  ],

  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

  verbose: true,
};

export default config;
