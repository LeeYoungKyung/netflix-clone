import React from 'react';

const NotFoundPage = () => {
  return (
    <div
      style={{
        backgroundColor: 'black',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
      }}
    >
      죄송합니다. 현재 찾을 . 수없는 페이지를 요청하셨습니다 <br /> <br />
      존재하지 않는 주소를 입력하셨거나
      <br /> <br />
      요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다
      <br /> <br />
      궁금한 점이 있으시다면 언제든 https://github.com/LeeYoungKyung 에 문의해
      주시기 바랍니다
      <br /> <br />
      감사합니다
      <br /> <br />
    </div>
  );
};

export default NotFoundPage;
