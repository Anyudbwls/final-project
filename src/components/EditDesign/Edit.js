import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import { usePickDispatch, usePickState } from '../../contexts/PickContext';
import { useDisplayResumeDispatch } from '../../contexts/DisplayResumeContext';
import { useResumeState } from '../../contexts/ResumeContext';
import { PickTemplate } from '../../templates/PickTemplate';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Resume({ company, title }) {
  return (
    <>
      <div className="">{company}</div>
      <div className="">{title}</div>
    </>
  );
}

function Edit() {
  const [designs] = useState([
    {
      id: 1,
      type: 'intro',
      name: 'intro',
    },
    {
      id: 2,
      type: 'project',
      name: 'project',
    },
    {
      id: 3,
      type: 'military',
      name: 'military',
    },
    {
      id: 4,
      type: 'career',
      name: 'career',
    },
    {
      id: 5,
      type: 'career',
      name: 'career1',
    },
    {
      id: 6,
      type: 'career',
      name: 'career1',
    },
    {
      id: 7,
      type: 'career',
      name: 'career1',
    },
    {
      id: 8,
      type: 'career',
      name: 'career1',
    },
    {
      id: 9,
      type: 'career',
      name: 'career1',
    },{
      id: 10,
      type: 'career',
      name: 'career1',
    },
    {
      id: 11,
      type: 'career',
      name: 'career1',
    },
    {
      id: 12,
      type: 'career',
      name: 'career1',
    },
    {
      id: 13,
      type: 'career',
      name: 'career1',
    },
    {
      id: 14,
      type: 'career',
      name: 'career1',
    },
    {
      id: 15,
      type: 'career',
      name: 'career1',
    },
    {
      id: 16,
      type: 'career',
      name: 'career1',
    },

  ]);
  const resumes = useResumeState();
  const { design, resume } = usePickState();
  const { i, name, design_type } = design;
  const pickDispatch = usePickDispatch();
  const displayResumeDispatch = useDisplayResumeDispatch();
  const [scroll, setScroll] = useState(false);

  const getDesignByType = () => {
    return designs.filter((i) => i.type === design_type);
  };

  const pickDesignHandle = (pickedName, pickedType) => {
    displayResumeDispatch({
      type: 'CHANGE_DESIGN',
      i: i,
      name: pickedName,
      design_type: pickedType,
    });
    pickDispatch({
      type: 'SET_DESIGN',
      i: i,
      name: pickedName,
      design_type: pickedType,
    });
  };

  const pickResumeHandle = (id) => {
    pickDispatch({ type: 'SET_RESUME', id: id });
  };

  return (
    <>
      <div className={`w-1/4 ${scroll ? 'block':'hidden'}`}></div>
      <div className={`w-1/4 bg-blue-200 rounded-xl shadow ${scroll ? 'fixed':'block'}`}>
        <Tab.Group>
          <Tab.List className='flex flex-1 p-2 bg-blue-900/20 rounded-xl'>
            {['이력서', '디자인'].map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg',
                    'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                    selected
                      ? 'bg-white shadow'
                      : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels as='nav' className='m-1'>
            {Object.values([designs, resumes]).map((posts, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  'bg-white rounded-xl p-3 flex-grow',
                  'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                )}
              >
                <div
                  className='flex flex-wrap min-h-screen content-start overflow-y-scroll'
                >
                  {idx === 0 &&
                    (getDesignByType().length !== 0 ? (
                      getDesignByType().map((post) => (
                        <div
                          key={post.id}
                          className={`w-1/2 h-40 ring-4 ring-blue-300 rounded-lx ring-inset shadow-lg p-4 ${
                            post.name === name && 'ring-blue-600'
                          }`}
                          onClick={() => pickDesignHandle(post.name, post.type)}
                        >
                          <PickTemplate
                            type={post.type}
                            name={post.name}
                            data={'hello'}
                          />
                        </div>
                      ))
                    ) : (
                      <div className='w-full text-center'>NO CONTENT</div>
                    ))}

                  {idx === 1 &&
                    posts.map((post) => (
                      <div
                        key={post.id}
                        className={`w-full ring-4 ring-blue-300 ring-inset shadow-2xl p-2 mb-2 ${
                          post.id === resume.id && 'ring-blue-600'
                        }`}
                        onClick={() => pickResumeHandle(String(post.id))}
                      >
                        <Resume company={post.company} title={post.title} />
                      </div>
                    ))}
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
}

export default React.memo(Edit);
