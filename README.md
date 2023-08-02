## typescript

2023-07-03 lts 
node v18.17.0
npm v7.19.1

통신라이브러리 - axios
서버프레임워크라이브러리 - Express.js
테스트 라이브러리 - jest
파일 데이터베이스  - lowdb , nedb


 npm install --save express axios jest lowdb 
 npm i -D @types/node typescript ts-node @types/jest @types/express nodemon @types/axios @types/jest

 # eslint
	npm i -D @babel/preset-typescript babel-jest @babel/core @babel/preset-env

  # eslint
 	npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev

# supertest
npm i -D @types/supertest supertest


"lint": "eslint . --ext .ts", // 전체코드에 lint 반영
"lint:fix": "eslint . --ext .ts --fix"  // 전체코드에 lint 반영후 자동수정


├── src/
│   ├── app.ts           # App entry point
│   ├── api/             # Express route controllers for all the endpoints of the app
│   ├── routes/
│   ├── controller/	 	
│   ├── config/          # Environment variables and configuration related stuff
│   ├── loaders/         # Split the startup process into modules
│   ├── models/          # Database models
│   ├── services/        # All the business logic is here
│   ├── interfaces/      # Type declarations and interfaces
│   ├── middleware/      # Custom express middleware
│   ├── subscribers/     # Event handlers for async task
│   ├── types/           # Type declaration files (d.ts files)
│   └── utils/           # Utility classes and functions
├── test/
├── package.json
├── tsconfig.json
└── .eslintrc.js

src/: 이 폴더는 애플리케이션의 모든 소스 코드를 포함합니다. TypeScript 파일, 설정 파일, 데이터베이스 모델 등이 모두 이 폴더 내에 위치합니다.
src/api/: 이 폴더는 애플리케이션의 모든 엔드포인트에 대한 Express 라우트 컨트롤러를 포함합니다.
src/config/: 이 폴더는 환경 변수와 관련된 설정을 포함합니다.
src/loaders/: 이 폴더는 애플리케이션의 시작 프로세스를 모듈로 분할합니다. 예를 들어, 데이터베이스 연결을 설정하는 로더, 의존성 주입 설정을 위한 로더 등이 있을 수 있습니다.
src/models/: 이 폴더는 데이터베이스 모델을 포함합니다.
src/services/: 이 폴더는 비즈니스 로직을 포함합니다. 여기서 데이터를 처리하고, 데이터베이스와의 상호작용을 수행하며, 에러를 처리합니다.
src/interfaces/: 이 폴더는 타입 선언과 인터페이스를 포함합니다.
src/middleware/: 이 폴더는 커스텀 Express 미들웨어를 포함합니다.
src/subscribers/: 이 폴더는 비동기 작업에 대한 이벤트 핸들러를 포함합니다.
src/types/: 이 폴더는 타입 선언 파일 (.d.ts 파일)을 포함합니다.
src/utils/: 이 폴더는 유틸리티 클래스와 함수를 포함합니다.



---
jest 환경 세팅하기

npm i jest
npm i -D @types/jest babel-jest ts-jest


jest.config.ts
```
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



```

package.json
```
"script" : {
	"test": "jest",
}

```

// npm 라이브러리 비교
https://npmtrends.com/diskdb-vs-lokijs-vs-lowdb-vs-nedb-vs-nedb-promise-vs-node-json-db


## lowdb
npm i lowdb

어뎁터 로 유연한게 기능 커스텀이 가능할것 같아서


---
const object1 = { a: 1, b: 2 };
const object2 = { c: 3, d: 4 };

const result1 = Object.assign({}, object1, object2);
console.log(result1); // { a: 1, b: 2, c: 3, d: 4 }
console.log(object1); // { a: 1, b: 2 } (원본 객체는 변경되지 않음)

const result2 = Object.assign(object1, object2);
console.log(result2); // { a: 1, b: 2, c: 3, d: 4 }
console.log(object1); // { a: 1, b: 2, c: 3, d: 4 } (원본 객체가 변경됨)
첫 번째 예제에서는 Object.assign({}, object1, object2)를 사용하여 새로운 객체에 object1과 object2의 속성을 모두 복사했습니다. object1과 object2는 그대로 유지됩니다.

두 번째 예제에서는 Object.assign(object1, object2)를 사용하여 object1에 object2의 속성을 복사했습니다. 따라서 object1은 변경되고, object2는 그대로 유지됩니다.