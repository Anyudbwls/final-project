import React from 'react';

function Career1({ data }) {
  return (
    <div className="h-full border-black justify-center align-middle">
      <div>[Career1]</div>
      <div>title: {data}</div>
    </div>
  );
}

Career1.defaultProps = {
  data: '기본 제목',
};

export default Career1;
