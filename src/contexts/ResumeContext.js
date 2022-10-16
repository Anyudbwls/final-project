import React, { useReducer, createContext, useContext } from 'react';

const initialResumes = [
  {
    id: '0',
    company: '미선택',
    title: '이력서를 선택해주세요.',
    data: {},
  },
  {
    id: '1',
    company: 'apple',
    title: '애플 지원 이력서 입니다.',
    data: {
      intro: '안녕하세요',
      career: '캐리어입니다.',
    },
  },
  {
    id: '2',
    company: 'google',
    title: '구글 지원 이력서 입니다.',
    data: {
      intro: '반갑습니다.',
    },
  },
];

function resumeReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return { items: state.items.concat(action.item) };
    case 'CHANGE':
      return {
        items: state.items.map((resume) =>
          resume.i === action.i
            ? {
                ...resume,
                name: action.name,
                type: action.design_type,
              }
            : resume,
        ),
      };
    case 'REMOVE':
      return { items: state.items.filter((resume) => resume.i !== action.i) };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const ResumeStateContext = createContext();
const ResumeDispatchContext = createContext();

export function ResumeProvider({ children }) {
  const [state, dispatch] = useReducer(resumeReducer, initialResumes);

  return (
    <ResumeStateContext.Provider value={state}>
      <ResumeDispatchContext.Provider value={dispatch}>
        {children}
      </ResumeDispatchContext.Provider>
    </ResumeStateContext.Provider>
  );
}

export function useResumeState() {
  return useContext(ResumeStateContext);
}

export function useResumeDispatch() {
  return useContext(ResumeDispatchContext);
}
