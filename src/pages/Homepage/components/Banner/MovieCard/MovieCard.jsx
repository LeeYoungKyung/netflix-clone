import React from 'react';
import { Badge } from 'react-bootstrap';
import './MovieCard.css';
import { useMovieGenreQuery } from '../../../../../hooks/useMovieGenre';

const MovieCard = ({ movie }) => {
  const { data: genreData } = useMovieGenreQuery();

  const showGenre = (genreIdList) => {
    if (!genreData) return [];
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name;
    });
    return genreNameList;
  };
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
      {/*  */}
      <div className='overlay'>
        <h4 className='p-2'>{movie.title}</h4>
        <div className='p-2'>{movie.vote_average}</div>
        <div className='p-2'>{movie.popularity}</div>
        {showGenre(movie.genre_ids).map((id, index) => (
          <Badge key={index} bg='danger' className='badge'>
            {id}
          </Badge>
        ))}
        <div className='p-2'>{movie.adult ? 'over18' : 'under18'}</div>
      </div>
      {/*  */}
    </div>
  );
};

export default MovieCard;
