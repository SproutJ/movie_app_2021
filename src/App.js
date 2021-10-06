import React, {Component} from 'react'
import axios from "axios"
class App extends Component {
  state = {
    isLoading: true,
    movies: []
  }

  getMovie = async () =>{
    const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json')
    console.log(movies);
  }

  componentDidMount() {
    this.getMovie()
  }

  render(){
    const { isLoading } = this.state
    return (
      <div>
        {isLoading ? 'Loading...' : '영화 데이터의 출력'}
      </div>
    )
  }
}

export default App