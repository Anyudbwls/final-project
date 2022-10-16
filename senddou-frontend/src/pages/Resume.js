import Navbar from "../components/Common/Navbar";
import React from 'react';
import { white } from 'tailwindcss/colors';
import Modal from '../components/Modal/Modal';
import Modal2 from '../components/Modal/Modal2';

/*밑줄*/
const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 5

    }}
  />
);

const color1 = "#522F63";
const color2 = "#463265";
const color3 = "#FFFFFF";

function Resume() {
  return (
    <>
      <div  style={{background: `linear-gradient(to bottom,  ${color1} 0%,${color2} 100%)`}}>
        <Navbar/>
        {/**/}
        <div className="flex py-14 mx-auto text-white ">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="w-3/12 text-right">
            <h1 className="text-5xl">SANDDOU</h1>
            &nbsp;&nbsp;
            <ColoredLine color="white" />
          </div>

          {/*동그라미 - 사이즈 변환 좀 문제 있는거같은데*/}

          <p className="absolute bottom-80 right-96 bg-pink-200"
             style={{width:50, height:50, borderRadius:25, left:100, top:600}}></p>
          <p className="absolute bottom-60 right-80 bg-pink-300"
             style={{width:75, height:75, borderRadius:50, left:200, top:800}}></p>

          <p className="absolute bottom-60 right-80 bg-white"
             style={{width:75, height:75, borderRadius:50, left:190, top:810, background: 'repeating-linear-gradient(-45deg, white, white 1px,#00ff0000 2px, #00ff0000 6px)'}}></p>


          <p className="absolute bottom-80 right-96 bg-purple-400"
             style={{width:75, height:75, borderRadius:50, left:1705, top:600}}></p>
          <p className="absolute bottom-60 right-80 bg-purple-200"
             style={{width:50, height:50, borderRadius:25, left:1605, top:800}}></p>

          <p className="absolute bottom-60 right-80 bg-white"
             style={{width:50, height:50, borderRadius:25, left:1595, top:810, background: 'repeating-linear-gradient(-45deg, white, white 1px,#00ff0000 2px, #00ff0000 6px)'}}></p>

        </div>

        {/*-----------------------------------------------------------------------------*/}
        {/*추천 이력서*/}
        <Modal/>

        {/*설명*/}
        <div className="flex justify-center py-14 mx-auto text-center text-white">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="w-6/12">
            <h1 className="text-5xl"><b className="text-purple-100">태그</b>를 이용해서</h1>
            &nbsp;&nbsp;
            <h1 className="text-5xl"><b className="text-yellow-100">원하는 디자인</b>의 <b className="text-purple-100">이력서</b>를 찾아보세요!</h1>
          </div>
        </div>

        {/*검색창*/}

        <div className="flex items-center max-w-md mx-auto bg-purple-200 rounded-full ">
          <div>
            <span className="flex items-center justify-center w-12 h-12 text-black rounded-full"
            >
              <svg className="w-10 h-10 bg-gray-400 rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"/>
              </svg>
            </span>
          </div>

          <div className="w-full">
            <input
              type="text"
              id="inputID"
              placeholder="검색어를 입력해주세요"
              className="w-full rounded-full py-6 px-6 font-bold bg-purple-200" />
          </div>

          <div>
            <button type="submit" className="flex items-center justify-center w-12 h-12 text-black rounded-full"
            >
              <svg className="w-10 h-10 bg-gray-400 rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </div>
        </div>

        {/*인기 템플릿 설명 - 공백 밑줄 대체 어케 그음?*/}
        <div className="flex py-24 mx-auto justify-center">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className=" text-5xl text-white text-right">
            <h1 className="firstbox"><b>샌듀</b>의 <b>유저들</b>에게</h1>
            <div className="relative">
            <h1 className="thirdbox"></h1>
            <h1 className="secondbox">가장 <b>인기</b> 있는 <b>이력서</b>에요!&nbsp;&nbsp;&nbsp;&nbsp;</h1>
            </div>
          </div>
        </div>

        {/*사진 슬라이드 쭈르륵*/}
        <Modal2/>
      </div>



    </>
  );
}

export default Resume;