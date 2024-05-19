import React from 'react';
import { Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // useHistory 대신 useNavigate 가져오기
import './MovieCard.css';
import { useMovieGenreQuery } from '../../../../../hooks/useMovieGenre';
import { BsCaretDownFill, BsCaretUpFill } from 'react-icons/bs';
import { CiStar } from 'react-icons/ci';

const MovieCard = ({ movie }) => {
  const { data: genreData } = useMovieGenreQuery();
  const navigate = useNavigate(); // useHistory 대신 useNavigate 사용

  const showGenre = (genreIdList) => {
    if (!genreData) return [];
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name;
    });
    return genreNameList;
  };

  const handleCardClick = () => {
    navigate(`/movies/${movie.id}`);
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
      onClick={handleCardClick} // 카드 클릭 시 handleCardClick 함수 호출
    >
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
    </div>
  );
};

export default MovieCard;
