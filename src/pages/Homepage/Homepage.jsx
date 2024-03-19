import React from 'react';
import './Homepage.css';
import Banner from './components/Banner/Banner';

//배너 popular 영화를 첫번째 아이템을 보여주기
//popular movie
//top rated movie

const Homepage = () => {
  return (
    <div id='hp'>
      <Banner />
    </div>
  );
};

export default Homepage;
