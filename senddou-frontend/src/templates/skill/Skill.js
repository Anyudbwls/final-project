import React from 'react';

function Skill({ data }) {
  return (
    <div className="h-full border-black justify-center align-middle">
      <div>[Skill]</div>
      <div>title: {data}</div>
    </div>
  );
}

Skill.defaultProps = {
  data: '기본 제목',
};

export default Skill;
