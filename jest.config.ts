/** @type {import('ts-jest').JestConfigWithTsJest} */
import { pathsToModuleNameMapper } from 'ts-jest'
import type { JestConfigWithTsJest } from 'ts-jest'
import {compilerOptions} from './tsconfig.json';
// const tsconfig = JSON.parse(readFileSync(`${__dirname}/tsconfig.json`, 'utf8'));
// const { compilerOptions } = tsconfig;



const jestConfig: JestConfigWithTsJest = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: [
      "js",
      "json",
      "ts"
  ],
  rootDir: ".",
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$",
  transform: {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  collectCoverageFrom: ["**/*.(t|j)s"],
  coverageDirectory: "../coverage",
    roots: ['<rootDir>'],
  modulePaths: [compilerOptions.baseUrl], // jest는 따로 맵핑해야함
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths)
};

export default jestConfig;


