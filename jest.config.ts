import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  transform: { "^.+\\.tsx$": "ts-jest", "^.+\\.ts$": "ts-jest" },
  modulePaths: ["node_modules", "<rootDir>/src"],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
};
export default config;
