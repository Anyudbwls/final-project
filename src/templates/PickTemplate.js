import Intro from './introduce/Intro';
import Project from './project/Project';
import Military from './military/Military';
import Career from './career/Career';
import Career1 from './career/Career1';

export function PickTemplate({ type, name, data }) {
  const template = {
    intro: {
      intro: <Intro data={data} />,
    },
    project: {
      project: <Project data={data} />,
    },
    military: {
      military: <Military data={data} />,
    },
    career: {
      career: <Career data={data} />,
      career1: <Career1 data={data} />,
    },
  };

  return template[type]?.[name] || <div className="text-center">NOT FOUND</div>;
}
