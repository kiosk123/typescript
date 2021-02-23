# 타입스크립트 알아보기
타입스크립트 파일은 확장자가 .ts로 끝난다

## 프로젝트 환경
1. [node.js](https://nodejs.org/en/)  
2. [vs code](https://code.visualstudio.com/)  
3. 타입스크립트 컴파일러 설치 및 제거 - [참고](https://blog.naver.com/thdbsgh3443/221372524988)
```
# -g는 전역설치 옵션
npm install -g typescript 

# Permission 에러 발생시
sudo npm install -g typescript 

# 타입스크립트 제거
sudo npm uninstall -g typescript
```
4. 타입스크립트 컴파일
```
tsc <타입스크립트 파일명>
```