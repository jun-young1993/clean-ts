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