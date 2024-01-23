import Slider from 'react-slick'
import MovieItem from '../MovieItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

const moviesList = props => {
  const {actionMovieData, comedyMoviesData} = props
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <div className="PlanetAppContainer">
      <h1 className="ActionHeading">Action Movies</h1>

      <div className="ActionMovieContainer">
        <div data-testid="planets">
          <Slider {...settings}>
            {actionMovieData.map(eachMovie => (
              <MovieItem movie={eachMovie} key={eachMovie.id} />
            ))}
          </Slider>
        </div>
      </div>

      <h1 className="ActionHeading">Comedy Movies</h1>

      <div data-testid="planets">
        <Slider {...settings}>
          {comedyMoviesData.map(eachMovie => (
            <MovieItem movie={eachMovie} key={eachMovie.id} />
          ))}
        </Slider>
      </div>
    </div>
  )
}
export default moviesList
