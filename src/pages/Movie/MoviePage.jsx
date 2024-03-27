import React, { useState } from 'react';
import './MoviePage.css';
import { useMovieGenreQuery } from '../../hooks/useSearchMovie';
import { useSearchParams } from 'react-router-dom';
import { Alert, Row, Spinner, Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import MovieCard from '../Homepage/components/Banner/MovieCard/MovieCard';
import ReactPaginate from 'react-paginate';

const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
  const keyword = query.get('q');
  const { data, isLoading, isError, error } = useMovieGenreQuery({
    keyword,
    page,
  });

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  if (isLoading) {
    return (
      <div className='spinner-area bg-black '>
        <Spinner
          animation='border'
          variant='danger'
          style={{
            width: '5rem',
            height: '5rem',
            backgroundColor: 'black',
            justifyItems: 'center',
          }}
        />
      </div>
    );
  }
  if (isError) {
    return <Alert variant='danger'>{error.message}</Alert>;
  }

  const itemsPerPage = 12;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, data.results.length);
  const handleMovieClick = () => {};

  const visibleMovies = data.results.slice(startIndex, endIndex);

  return (
    <div className='mp'>
      <Container className='moviePage'>
        <Row>
          <Col lg={10} xs={12}>
            <Row>
              {visibleMovies.map((movie, index) => (
                <Col key={index} lg={3} xs={20} className='mb-3'>
                  <MovieCard movie={movie} onMovieClick={handleMovieClick} />
                </Col>
              ))}
            </Row>
            <ReactPaginate
              nextLabel=' >'
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              marginPagesDisplayed={2}
              pageCount={Math.ceil(data.results.length / itemsPerPage)}
              previousLabel='<'
              pageClassName='page-item'
              pageLinkClassName='page-link'
              previousClassName='page-item'
              previousLinkClassName='page-link'
              nextClassName='page-item'
              nextLinkClassName='page-link'
              breakLabel='...'
              breakClassName='page-item'
              breakLinkClassName='page-link'
              containerClassName='pagination'
              activeClassName='active'
              renderOnZeroPageCount={null}
              forcePage={page - 1}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MoviePage;
