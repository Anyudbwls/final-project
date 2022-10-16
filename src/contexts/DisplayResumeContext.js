import React, { useReducer, createContext, useContext, useRef } from 'react';

const initialDisplayResumes = {
  items: [
    {
      type: 'intro',
      name: 'intro',
      i: '0',
      x: 0,
      y: 0,
      w: 2,
      h: 2,
    },
    {
      type: 'career',
      name: 'career',
      i: '1',
      x: 2,
      y: 0,
      w: 2,
      h: 2,
    },
    {
      type: 'military',
      name: 'military',
      i: '2',
      x: 4,
      y: 0,
      w: 2,
      h: 2,
    },
    {
      type: 'project',
      name: 'project',
      i: '3',
      x: 6,
      y: 0,
      w: 2,
      h: 2,
    },
  ],
};

function resumeReducer(state, action) {
  switch (action.type) {
    case 'CHANGE_DESIGN':
      return {
        items: state.items.map((item) => {
          return item.i === action.i
            ? {
                ...item,
                name: action.name,
                type: action.design_type,
              }
            : {
                ...item,
              };
        }),
      };
    case 'SET_DATA':
      const keys = Object.keys(action.data);
      state.items = state.items.map(item => {
          return keys.includes(item.type)? {...item, data: action.data[item.type]}:{ ...item, data: null };
        },
      );
      return state;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const DisplayResumeStateContext = createContext();
const DisplayResumeDispatchContext = createContext();
const DisplayResumeNextIdContext = createContext();

export function DisplayResumeProvider({ children }) {
  const [state, dispatch] = useReducer(resumeReducer, initialDisplayResumes);
  const nextId = useRef(0);

  return (
    <DisplayResumeStateContext.Provider value={state}>
      <DisplayResumeDispatchContext.Provider value={dispatch}>
        <DisplayResumeNextIdContext.Provider value={nextId}>
          {children}
        </DisplayResumeNextIdContext.Provider>
      </DisplayResumeDispatchContext.Provider>
    </DisplayResumeStateContext.Provider>
  );
}

export function useDisplayResumeState() {
  return useContext(DisplayResumeStateContext);
}

export function useDisplayResumeDispatch() {
  return useContext(DisplayResumeDispatchContext);
}

export function useDisplayResumeNextId() {
  return useContext(DisplayResumeNextIdContext);
}
