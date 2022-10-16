import React from 'react';

function Intro({ data }) {
  return (
    <div className="h-full border-black justify-center align-middle">
      <div>[intro1]</div>
      <div>title: {data}</div>
    </div>
  );
}

Intro.defaultProps = {
  data: '기본 제목',
};

export default Intro;
