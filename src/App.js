import React, {Component} from 'react'
import axios from "axios"
import Movie from './Movie'
class App extends Component {
  state = {
    isLoading: true,
    movies: []
  }

  getMovie = async () =>{
    const {
      data: {
        data: {movies}
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating')
    this.setState({movies, isLoading: false})
  }

  componentDidMount() {
    this.getMovie()
  }

  render(){
    const { isLoading, movies } = this.state
    return (
      <section class='container'>
        {isLoading ? (
          <div class='loader'>
            <spna class='loader-class'>Loading...</spna>
          </div>
        )
          :
          (
            <div class='movies'>
              {
                movies.map( (movie) => {
                  return (
                    <Movie 
                      key = {movie.id}
                      id = {movie.id}
                      year = {movie.year}
                      title = {movie.title}
                      summary = {movie.summary}
                      poster = {movie.poster}
                    />
                  )})}
            </div>
          )}
      </section>
    )
  }
}

export default App