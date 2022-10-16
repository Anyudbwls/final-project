import React from 'react';

function Career({ data }) {
  return (
    <div className="h-full border-black justify-center align-middle">
      <div>[Career]</div>
      <div>title: {data}</div>
    </div>
  );
}

Career.defaultProps = {
  data: '기본 제목',
};

export default Career;
