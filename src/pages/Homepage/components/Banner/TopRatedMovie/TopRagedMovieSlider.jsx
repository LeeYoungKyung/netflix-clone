import React from 'react';
import { usePopularMoviesQuery } from '../../../../../hooks/usePopularMovies';
import Alert from 'react-bootstrap/Alert';
import Carousel from 'react-multi-carousel';
import MovieCard from '../MovieCard/MovieCard';
import 'react-multi-carousel/lib/styles.css';
import './TopRangedMovieSlider.css';
import { useTopRagedMoviesQuery } from '../../../../../hooks/useTopRagedMovies';
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const TopRagedMovieSlider = () => {
  const { data, isLoading, isError, error } = useTopRagedMoviesQuery();
  if (isLoading) {
    return <h1>Loding..</h1>;
  }
  if (isError) {
    return <Alert variant='danger'>{error.message}</Alert>;
  }
  return (
    <div>
      <h3 className='text-white bg-black mb-0'>Top Raged Movies</h3>
      <Carousel
        infinite={true}
        centerMode={true}
        itemClass='movie-slider p-1'
        containerClass='carousel-containter'
        responsive={responsive}
        className='text-white p-3'
      >
        {data.results.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </Carousel>
    </div>
  );
};

export default TopRagedMovieSlider;
