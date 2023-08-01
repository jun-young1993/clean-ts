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


"lint": "eslint . --ext .ts", // 전체코드에 lint 반영
"lint:fix": "eslint . --ext .ts --fix"  // 전체코드에 lint 반영후 자동수정