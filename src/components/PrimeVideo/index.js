import {Component} from 'react'
import MoviesSlider from '../MoviesSlider'

import './index.css'

class PrimeVideo extends Component {
  state = {actionMoviesList: [], comedyMoviesList: []}

  componentDidMount() {
    this.sortMovies()
  }

  sortMovies = () => {
    const {moviesList} = this.props
    const actionList = moviesList.filter(
      eachMovie => eachMovie.categoryId === 'ACTION',
    )
    const comedyList = moviesList.filter(
      eachMovie => eachMovie.categoryId === 'COMEDY',
    )
    this.setState({actionMoviesList: actionList, comedyMoviesList: comedyList})
  }

  render() {
    const {moviesList} = this.props
    const {actionMoviesList, comedyMoviesList} = this.state
    console.log(actionMoviesList)

    return (
      <div className="prime-video-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png "
          alt="prime video"
          className="prime-video-img"
        />
        <div className="videos-section">
          <MoviesSlider
            actionMovieData={actionMoviesList}
            comedyMoviesData={comedyMoviesList}
          />
        </div>
      </div>
    )
  }
}

export default PrimeVideo
