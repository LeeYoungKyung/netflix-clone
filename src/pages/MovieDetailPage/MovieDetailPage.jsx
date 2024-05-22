import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CiStar } from 'react-icons/ci';
import { Badge } from 'react-bootstrap';
import './MovieDetailPage.css';

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      console.log('fffff', movie);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=3a18eea70077ee66870763c5198468bc&language=ko-KR`
        );
        if (!response.ok) {
          throw new Error('영화 정보를 가져오는데 실패했습니다');
        }
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <p className='text-white'>로딩 중...</p>;
  }

  if (error) {
    return <p className='text-white'>오류: {error}</p>;
  }

  return (
    <div
      className='detailDiv flex justify-center items-center'
      style={{ backgroundColor: 'black', height: '100vh' }}
    >
      {movie && (
        <div
          className='main max-w-4xl bg-gray-900 rounded-lg p-8 flex'
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt='포스터'
            className='movie-poster p-4'
          />
          <div
            className='movie-info w-4/5 items-center	'
            style={{
              display: 'flex',
              flexDirection: 'column',
              position: 'relative', // Added to ensure text is on top of the overlay
              zIndex: 2,
            }}
          >
            <div
              className='info-header p-3 justify-center'
              style={{ justifyContent: 'center', width: '80%' }}
            >
              <h1 className=' text-xs font-black	 text-white mb-4'>
                {movie.title}
              </h1>

              <p className='text-white mb-2'>{movie.release_date}</p>

              <div
                className='mb-2'
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <CiStar className='text-white' />
                <p className='text-white mb-0'>{movie.vote_average}</p>
              </div>

              <p className='text-white mb-2 text-xl'>
                {movie.genres.map((genre, index) => (
                  <Badge key={index}>{genre.name}</Badge>
                ))}
              </p>
              <p
                className='overview text-white bg-black overview ;
'
              >
                {movie.overview}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetailPage;
