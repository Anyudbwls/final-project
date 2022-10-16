import React from 'react';

function Military({ data }) {
  return (
    <div className="h-full border-black justify-center align-middle">
      <div>[Military]</div>
      <div>title: {data}</div>
    </div>
  );
}

Military.defaultProps = {
  data: '기본 제목',
};

export default Military;
