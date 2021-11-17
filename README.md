# 최주선 202030135

## [11월 17일]

>실습 파일  
TodoApp.html  

- Todo List 예제
    - TodoApp과 TodoList라는 2개의 컴포넌트로 구성됨.
    - props와 state 사용.
    - state를 사용해서 사용자가 입력한 텍스트와 할일 목록 관리.
    - 이벤트 핸들러들이 인라인으로 각각 존재하는 것처럼 보여도 실제로는 이벤트 위임을 통해서 하나로 구현됨.
    - handleChange는 모든 키보드 입력마다 react의 state를 갱신해서 보여줌.
    - 시간 순 동작 순서
        - 유저 입력 > handleChange > react의 state 갱신 > form element가 react state를 참조.
    - handleSubmit은 버튼이 클릭될 때 발생하는 event를 처리함.
    - render() 메소드에서 초기 렌더링 실행.
    - onChange를 통해 input에 입력되는 값으로 state 상태 변경 준비.
    - handleSubmit(e)에서 e.preventDefault() 메소드를 사용하는 이유
        - 브라우저에서 양식을 제출할 때는 기본적으로 브라우저의 새로고침이 발생하는데 react나 SPA(Single Page Application)의 경우 필요가 없는 동작이기 때문에 이를 방지하기 위해 사용한다.

- key props의 역할
    - key는 props를 안정적으로 사용할 수 있도록 고유성을 부여하기 위해 필요함.
    - react가 어떤 props를 변경, 추가 또는 삭제할지 식별하는 것을 도와줌.
    - 반드시 date를 사용하지 않아도 됨. 배열의 index값을 사용해도 됨.
    - 유일한 값이라면 그 값이 무엇이든 상관없음.

## [11월 10일]
>실습 파일  
Detail.js / App.js / package.json   

- 영화 제목 출력
    - 영화 제목을 출력하기 위해서 Detail.js에서 다음과 같은 부분을 추가한다.
    ```javascript
    render(){
        const { location } = this.props
        if(location.state){
            return (
                <span>{ location.state.title }</span>
            )
        } else {
            return null
        }
    }
    ```
    - 단순하게 location.state.title만 출력하도록 하면 /movie-detail로 이동 시 오류가 발생하게 된다. componentDidMount() 생명주기 함수에 작성한 리다이렉트 기능이 동작하지 않기 때문이다. 동작하지 않는 이유는 Detail 컴포넌트가 render() -> componentDidMount() 순서로 함수를 실행하기 때문이다.
    - 즉, render() 안에서 location.state.title을 사용하려고 하는데 location.state가 undefined이기 때문이다.
    - 해결법은 render() 안에 componentDidMount() 생명주기 함수에 작성한 리다이렉트 코드를 추가하는 것이다. 이 해결법을 적용한 것이 위에 있는 코드의 if문 부분이다.

- router 사용 후 주소에 hash(#)가 나타나는 현상 제거법
    - HashRouter 대신 BrowserRouter 사용하기.

[9장. 영화 앱 깃허브에 배포하기]
- package.json 수정.
- npm install gh-pages
- 내가 배포 완료한 링크 (https://SproutJ.github.io/movie_app_2021)


## [11월 03일]
>실습 파일  
Navigation.js / Navigation.css / Movie.js / Detail.js / About.js / App.js   

- movie-detail 추가
    - App.js
    ```javascript
    ...
    <Route path='/movie-detail' component={Detail} />
    ```

- 리다이렉트 기능
    - route props의 history키 활용.
    - history키에는 push, go, goBack, goForward와 같은 키가 있으며 그 키에는 url을 변경해주는 함수들이 있다. 이 함수들을 이용해서 리다이렉트 기능을 구현한다.

- 컴포넌트 설치 오류
    - rm 명령이 실행되지 않으면 shell을 관리자 권한으로 실행한 후 재시도.
    - 그래도 안 되면 탐색기에서 삭제해보기.
    - 원인 모를 문제 발생 시 cache clean과 rebuild를 통해 많은 부분 해결되기도 함.


## [10월 27일]

>실습 파일  
Movie.js  
Movie.css  
Navigation.js  
App.css  
App.js
index.html  
About.css  
About.js  
Home.css  
Home.js  



- map()함수 기능
    -  2번째 매개변수를 지정할 경우 배열의 index값을 반환해주는 기능이 있다.

- 자바스크립트 slice 함수
    - 사용 예시
    ```
    "hereisstring".slice(0, 10) // 결과는 "hereisstri"가 된다.
    ```

- 영화 앱 제목 변경 : public폴더에 있는 index.html에 있는 title부분 수정.

[8장. 영화 앱에 여러 기능 추가하기]
- 라우터
    - 사용자가 입력한 URL을 통해 특정 컴포넌트를 불러준다.
    - 여러 종류의 라우터를 제공받기 위해서 설치
    ```
    npm install react-router-dom
    ```
    - 라우터에는 2가지 props를 전달할 수 있다. 하나는 URL을 위한 path props고, 또 하나는 URL에 맞는 컴포넌트를 불러주기 위한 component props 입니다.

- 문제 : 링크를 클릭할 때마다 리액트가 죽고, 새 페이지가 열리는 문제.
    - 원인 : a태그의 href속성이 페이지 전체를 다시 그리는 성질을 갖고 있기 때문이다.
    - 해결 : react-router-dom의 Link 컴포넌트를 사용하면 된다.




## [10월 13일]

>실습 파일<br>
Movie.js  
App.js  
Movie.css  
App.css  

- Movie.js html코드 스타일 지정
```javascript
<h3 class='movie-title' style={{backgroundColor:'red'}}>{title} </h3> // background-color가 아니라 backgroundColor
```

- 포스터 이미지 불러오기
```javascript
// App.js에서
movies.map( (movie) => {
     return (
        <Movie 
            key = {movie.id}
            id = {movie.id}
            year = {movie.year}
            title = {movie.title}
            summary = {movie.summary}
            poster = {movie.medium_cover_image} // 이 부분
        />
    )})
```

- 주의할 점
    - 괄호 짝 맞추기와 위치 및 정리
    - 개행

[7장. 영화 앱 다듬기]
- class를 className으로 변경해야 하는 이유
    - HTML의 class와 자바스크립트의 class라는 이름이 겹치면 react가 혼란스러울 수 있다.

## [10월 06일]

>실습 파일<br>
5-3_App.js<br>
App.js<br>
Movie.js<br>

- super
    - 자바스크립트는 언어적 제약사항으로 생성자에서 super를 호출하기 전에는 this를 사용할 수 없다. super를 먼저 호출해야 this를 사용할 수 있다.

- setTimeout() 함수
    - 첫 번째 인자는 실행할 함수, 두 번째 인자는 지연시간.
    - 두 번째 인자 시간만큼 지난 후 첫 번째 인자의 함수를 실행함.
    - 단위는 msec

[06장. 영화 앱 만들기]
- axios 설치
```
npm install axios
```
- async, await
    - 자바스크립트에게 특정 함수가 시간이 필요하다는 것을 알릴 때 사용함.
    - 자바스크립트에게 시간이 필요하다는 것을 알리려면 async를 () 앞에 붙인다.
    - 실제 시간이 필요한 대상인 함수에는 await를 붙인다.


## [09월 29일]

>실습 파일<br>
App.js<br>

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

- React 프로젝트 clone하기
```
$ git clone {레포지토리 주소}
```
* 클론 후에
```
$ cd {레포지토리 이름}
$ npm install
$ npm start
```
를 하면 package.json에 등록되어 있는 module을 설치하게 된다.


- prop-types : props의 자료형을 검사할 수 있도록 만들어 주는 도구.

[05장. State와 클래스형 컴포넌트]
* props는 정적인 데이터만 다룰 수 있다.
- state
    - state는 동적인 데이터를 다루기 위해 사용된다.
    - state는 class형 컴포넌트에서 사용된다.

- render() 함수
    - class형 컴포넌트에서는 바로 return을 사용할 수 없음.
    - 따라서 render() 함수 내에서 return문을 사용한다.
    - 함수형 컴포넌트는 return 문이 JSX를 반환하고, 클래스형 컴포넌트는 render() 함수가 JSX를 반환한다.


## [09월 15일]

>실습 파일<br>
App.js<br>

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

>실습 파일<br>
package.json<br>
index.js<br>
App.js<br>
index.html<br>

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