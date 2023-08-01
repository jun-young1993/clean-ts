/**
 presets: Babel의 preset은 플러그인의 집합입니다. 이를 통해 여러 플러그인을 한 번에 설정할 수 있습니다.

['@babel/preset-env', { targets: { node: 'current' } }]: @babel/preset-env는 자동으로 프로젝트의 타겟 환경에 맞는 플러그인들을 설정해줍니다. 여기서 targets: { node: 'current' }는 현재 Node.js 버전을 타겟으로 설정하라는 의미입니다. 즉, Babel은 현재 사용중인 Node.js 버전에서 지원하지 않는 최신 자바스크립트 기능들만 변환합니다.

@babel/preset-typescript: TypeScript를 위한 Babel 프리셋입니다. 이를 통해 Babel은 TypeScript 코드를 표준 자바스크립트 코드로 변환합니다. 이 프리셋을 사용하면 별도의 TypeScript 컴파일러(tsc) 없이도 TypeScript를 사용할 수 있습니다.

따라서 이 설정은 "현재 Node.js 버전에서 실행 가능한 코드로 최신 JavaScript와 TypeScript 코드를 변환하라"는 Babel에게의 지시입니다.
 */

module.exports = {
	presets: [
	  ['@babel/preset-env', { targets: { node: 'current' } }],
	  '@babel/preset-typescript',
	],
      };