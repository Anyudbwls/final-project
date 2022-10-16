import React from 'react';

function Education({ data }) {
  return (
    <div className="h-full border-black justify-center align-middle">
      <div>[Education]</div>
      <div>title: {data}</div>
    </div>
  );
}

Education.defaultProps = {
  data: '기본 제목',
};

export default Education;
