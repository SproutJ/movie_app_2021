import React from 'react';

function Food({name, picture}) {
  return (
    <div>
    <h2>I like {name}</h2>
    <img src={picture} />
    </div>
  );
}

const foodLike = [
  {
    name: 'strawberry',
    image: 'https://t1.daumcdn.net/cfile/blog/99C56E4E5C495B0803',
  },
  {
    name: 'juice',
    image: 'https://lh3.googleusercontent.com/proxy/Cy3PBVWwTh1KVsNfTo9FFNCl33k5NsleiCKNvhBT0VfxsbKHO_-4eH6G8_Q0v2TaaDWG_JEKX-84xEZAmGRxGBhxi-i89B4t-cxcp6he-vP8fj1T',
  },
  {
    name: 'tteokbokki',
    image: 'https://cdn.kihoilbo.co.kr/news/photo/202008/880134_302005_3430.png',
  }
];

const renderFood = dish => <Food name={dish.name} picture={dish.image} />;

// function renderFood(dish){
//   return <Food name={dish.name} picture={dish.image} />;
// }

function App() {
  return (
    <div>
      <h1>Hello React!!</h1>
      {foodLike.map(renderFood)}
    </div>
  );
}

export default App;