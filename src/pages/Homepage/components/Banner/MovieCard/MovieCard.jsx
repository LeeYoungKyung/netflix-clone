import React from 'react';
import { Badge } from 'react-bootstrap';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <div
      style={{
        backgroundImage:
          'url(' +
          `https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` +
          ')',
      }}
      className='movie-card'
    >
      <div className='overlay'>
        <h1 className='p-2'>{movie.title}</h1>
        {movie.genre_ids.map((id, index) => (
          <Badge key={index} bg='danger'>
            {id}
          </Badge>
        ))}
        <div className='p-2'>{movie.vote_average}</div>
        <div className='p-2'>{movie.popularity}</div>
        <div className='p-2'>{movie.adult ? 'over18' : 'under18'}</div>
      </div>
    </div>
  );
};

export default MovieCard;
