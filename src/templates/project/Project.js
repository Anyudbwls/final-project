import React from 'react';

function Project({ data }) {
  return (
    <div className="h-full border-black justify-center align-middle">
      <div>[Project]</div>
      <div>title: {data}</div>
    </div>
  );
}

Project.defaultProps = {
  data: '기본 제목',
};

export default Project;
