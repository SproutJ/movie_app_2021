# 최주선 202030135

## [09월 29일]
- git version 확인
```
$ git version
```
- git defaultBranch 설정
```
$ git config --global init.defaultBranch main
```
- git 관련 모든 설정 확인
```
$ git config --list
```
- 기존 브랜치 변경
```
$ git branch -m master main
```

- 이미지 삽입 방법
    - 상대 경로로 이미지를 삽입하는 방법
        - import를 사용하는 방법
        - require를 사용하는 방법

## [09월 15일]

- props
    - 컴포넌트에서 컴포넌트로 전달하는 데이터.
    - 함수의 매개변수 역할을 하는 것.
    - props를 사용하면 컴포넌트를 효율적으로 사용 가능함.
    - props의 전달 데이터는 문자열인 경우를 제외하면 모두 중괄호 '{}'로 감싸야 한다.
    * 객체의 특정 값을 사용할 때는 점(.) 연산자를 사용한다.

    - 구조 분해 할당으로 props 사용
        - ES6의 문법 중 구조 분해 할당(destructuring-assignment)를 사용하면 점 연산자를 사용하지 않아도 된다.

[04장. 똑똑하게 컴포넌트 만들기]
- map() 함수
    - 배열의 모든 원소마다 특정 작업을 하는 함수를 적용하고, 그 함수가 반환한 결과를 모아서 배열로 반환해 준다.

## [09월 08일]

[02장. React로 클론 코딩 시작]
- 웹팩(Webpack)
    - 자바스크립트 앱을 위한 정적 모듈들을 하나로 묶어주는 번들러.
    - 웹팩에서는 자바스크립트, 스타일시트, 이미지 등 모든 것을 모듈로 본다.
- 바벨(Bavel)
    - 최신 자바스키립트 문법을 사용할 수 있게 해주는 트랜스파일러.

* React로 개발하는 경우, 웹팩이나 바벨은 신경 쓰지 않아도 된다.

- create-react-app
    - react를 위한 보일러 플레이트입니다.
    * 보일러 플레이트(Boilerplate) : 최소한의 변경으로 여러 곳에서 재사용이 가능한 코드를 보일러 플레이트 코드라고 함.
    - 별다른 개발환경 구축 없이 react 개발을 바로 시작할 수 있도록 프로젝트 구조 작업, 설정 작업 등을 자동으로 진행해주는 도구.
- React 동작 원리
    - 자바스크립트를 해석해서 그 결과물을 html에 삽입한다.

[03장. React 기초 개념]
- 컴포넌트
    - function으로 정의한 곳.
- JSX
    - 컴포넌트는 자바스크립트와 HTML을 조합한 JSX라는 문법을 사용해서 만든다.

## [09월 01일]

- 클론 코딩
    - 실제로 존재하는 사이트나 앱의 코드를 보며 그대로 따라 만들면서 해당 언어나 기술을 습득하는 방법.
    - 부작용 : 완성된 코드가 존재하기 때문에 잘못된 방법으로 학습하면 아무리 공부해도 실력이 늘지 않는다.
    - 학습 방법
        - 맹목적인 카피 금지
        - 모르는 내용이나 코드에 대해서 반드시 질문하거나 검색하기
        - 클론한 코드를 그대로 따라하지 말고 학습자의 개성을 살려서 코딩하기
        - 주석 달기
        - 학습 내용 문서화하기
        - 지속적인 커밋과 포트폴리오 만들기.
        - 학습한 내용을 기반으로 한 다른 프로젝트를 스스로 기획하고 개발하기.

[01장. React 시작]
- React
    - 장점
        - 자바스크립트로 작성되어있다는 점.