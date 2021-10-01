import React from 'react';
import PropTypes from 'prop-types';

const foodLike = [
  {
    id: 1,
    name: 'strawberry',
    image: 'https://t1.daumcdn.net/cfile/blog/99C56E4E5C495B0803',
    alt: '딸기',
    rating: 5.0
  },
  {
    id: 2,
    name: 'juice',
    image: 'http://image.dongascience.com/Photo/2017/03/14909336653856.jpg',
    alt: '주스',
    rating: 4.0
  },
  {
    id: 3,
    name: 'tteokbokki',
    image: 'https://cdn.kihoilbo.co.kr/news/photo/202008/880134_302005_3430.png',
    alt: '떡볶이',
    rating: 4.5
  }
]

const renderFood = dish => <Food
  key={dish.id}
  name={dish.name}
  picture={dish.image}
  alt={dish.alt}
  rating={dish.rating}
  />

  Food.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number
  }

function App() {
  console.log(foodLike.map(renderFood));
  return (
    <div> 
      <h1>Hello React!!</h1> 
      {foodLike.map(renderFood)}
      </div>
  );
}

function Food({ name, picture, alt, rating }) {
  return (
    <div>
      <h2>I like {name}.</h2>
      <h4>{rating}/5.0</h4>
      <img alt={alt} src={picture} />
    </div>
  )
}

export default App;