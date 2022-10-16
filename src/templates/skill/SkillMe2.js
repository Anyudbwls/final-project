import React, {useCallback} from 'react';
import {FcCheckmark} from "react-icons/fc";


function SkillMe2({data, display}) {
    const createElement = useCallback((item) => {
        return item.map(el =>
            (<div className="px-2 border-none bg-gray-100 rounded-xl mb-1" key={el.id}>
                <div className='font-mono text-red-400 text-sm px-2 flex'>

                    <div className='mr-1 mt-1'><FcCheckmark/></div>
                    {el.title}</div>
                <div className='ml-4 pb-1' >{el.content}
                </div>
            </div>),
        );
    }, []);

    return (<div className='h-full border-2 border-gray-300 rounded-xl px-2 py-2 '>
            <div className={`${display && 'text-3xl'} flex font-bold font-mono p-2`}>Skill</div>
            <div className='h-0.5 '></div>
            <>
                {data ? (display && createElement(data)) :
                    <div>
                        <div className='border-none px-12 mb-1 mt-1 bg-gray-200 rounded-lg'>
                            <div className='font-bold text-xs text-center text-red-300 '>- - -</div>
                        </div>

                    </div>}
            </>
        </div>
    );
}

SkillMe2.defaultProps = [
    {
        "title": "병역사항",
        "content": ["병장 만기 전역"]
    }
]
export default SkillMe2;
