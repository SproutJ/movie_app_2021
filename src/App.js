import React from 'react';

function Food({fav}) {
  return <h1>I like {fav}</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello React!!</h1>
      <Food fav="kimchi" />
      <Food fav="samgiosal" />
      <Food fav="chukumi" />
      </div>
  );
}

export default App;