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
```