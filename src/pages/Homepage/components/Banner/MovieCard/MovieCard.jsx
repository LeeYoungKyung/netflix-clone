import React from 'react';
import { Badge } from 'react-bootstrap';
import './MovieCard.css';
import { useMovieGenreQuery } from '../../../../../hooks/useMovieGenre';
import { BsCaretDownFill } from 'react-icons/bs';
import { BsCaretUpFill } from 'react-icons/bs';
import { CiStar } from 'react-icons/ci';

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
      <div
        className='overlay p-2 '
        style={{ alignItems: 'center', placeContent: 'center' }}
      >
        <h4 className='p-2'>{movie.title}</h4>
        <div
          className='p-2'
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <CiStar />
          <span>{movie.vote_average}</span>
        </div>

        <div className='p-2'>{movie.popularity}</div>
        {showGenre(movie.genre_ids).map((id, index) => (
          <Badge key={index} bg='danger' className='badge'>
            {id}
          </Badge>
        ))}
        <div className='p-2' style={{ display: 'flex', alignItems: 'center' }}>
          <span>18</span>
          {movie.adult ? <BsCaretUpFill /> : <BsCaretDownFill />}
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default MovieCard;
