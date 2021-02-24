# 타입스크립트 알아보기

## 타입스크립트 특징
1. 타입스크립트 파일은 확장자가 .ts로 끝난다  
2. 타입스크립트 파일을 타입스크립트 컴파일러로 컴파일하여 자바스크립트 파일로 만든 후 배포한다. - 기본적으로 es5 컴파일된다.

## 프로젝트 환경
1. [node.js](https://nodejs.org/en/)  
2. [vs code](https://code.visualstudio.com/)  
3. 타입스크립트 컴파일러 설치 및 제거 - [참고](https://blog.naver.com/thdbsgh3443/221372524988)
```bash
# -g는 전역설치 옵션
npm install -g typescript 

# Permission 에러 발생시
sudo npm install -g typescript 

# 타입스크립트 제거
sudo npm uninstall -g typescript

# 설치된 타입스크립트 버전 확인
npm show typescript version
```
4. 타입스크립트 컴파일
```bash
tsc <타입스크립트 파일명>

# es6 버전으로 컴파일
tsc <타입스크립트 파일명> --target es6

# es5에서 지원되지 않는 es6 버전의 문법 또는 API 컴파일시
tsc <타입스크립트 파일명> --lib <파라미터>
# ex) Promise 컴파일시 es2015.promise를 쓰겠다라는 의미
tsc promise.ts --lib es2015.promise,es2015.iterable
tsc promise.ts --lib es2015,dom

# target을 es6로 하지만 모듈 시스템은 common js형태로 하기
tsc promise.ts --target es6 --lib es2015,dom --module commonjs

# 컴파일시 적용 옵션 확인 --showConfig
tsc promise.ts --target es6 --lib es2015,dom --module commonjs --showConfig
```

5. 타입 스크립트 컴파일 설정파일 - tsconfig.json  
`npm init -y`으로 생성된 node 프로젝트에서 npm으로 의존 모듈 설치시 node_modules 폴더에 저장되므로 node_modules는 exclude 해준다.  
설정 후 tsc 명령만 프로젝트 폴더에서 입력하면 옵션없이도 컴파일 처리된다.  