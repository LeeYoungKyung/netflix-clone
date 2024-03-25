import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../MovieCard/MovieCard';
import { useUpcomingMoviesQuery } from '../../../../../hooks/useUpcomingMovies';
import './UpComingMovie.css';
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

const UpComingMovie = () => {
  const { data, isLoading, isError, error } = useUpcomingMoviesQuery();
  if (isLoading) {
    return <h1>Loding..</h1>;
  }
  if (isError) {
    return <Alert variant='danger'>{error.message}</Alert>;
  }
  return (
    <div>
      <h3 className='text-white bg-black mb-0'>UpComing Movies</h3>
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

export default UpComingMovie;
