# 트리플 과제 테스트

트리플 과제 테스트 입니다.

<br />

## 프로젝트 실행 방법

### `git clone https://github.com/Delimao/triple.git`

git clone을 통해 로컬 저장소에 저장

<br />

### `Visual Studio Code에서 설치된 triple 폴더 열기`

<br />

### `yarn start`

<br />

실행 완료!!

<br />

## 트러블 슈팅

> 'react-scripts'은(는) 내부 또는 외부 명령, 실행할 수 있는 프로그램, 또는배치 파일이 아닙니다.
  
명령어를 통해 react-scripts 전역 설치

    yarn add global react-scripts

<br /><br />

> yarn : 이 시스템에서 스크립트를 실행할 수 없으므로 C:\Users\user\AppData\Roaming\npm\yarn.ps1 파일을 로드할 수 없습니다. 자
세한 내용은 about_Execution_Policies(https://go.microsoft.com/fwlink/?LinkID=135170)를 참조하십시오.

스크립트 실행 권한 문제, Windows PowerShell -> 관리자 권한으로 실행

    set-ExecutionPolicy RemoteSigned -> 예(Y)
    
<br /><br />

> yarn : 'yarn' 용어가 cmdlet, 함수, 스크립트 파일 또는 실행할 수 있는 프로그램 이름으로 인식되지 않습니다. 이름이 정확한지 확인하고 경로가 포함된 경우 경로가 올바른지 검증한 다음 다시 시도하십시오.

yarn이 설치 안 된 경우,

    npm install -g yarn 이후, yarn add global react-scripts 실행

<br /><br />

> npm : 'npm' 용어가 cmdlet, 함수, 스크립트 파일 또는 실행할 수 있는 프로그램 이름으로 인식되지 않습니다. 이름이 정확한지 확인하고 경로가 포함된 경우 경로가 올바른지 검증한 다음 다시 시도하십시오.

npm이 설치 안 된 경우,

    node.js 설치: https://nodejs.org/ko/download/

<br />

## 사용 기술 스택

### `React --Typescript`

### `styled-components`
