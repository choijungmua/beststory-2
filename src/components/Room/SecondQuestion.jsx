import React from 'react'
import FillMainLogo from "../../assets/images/FillMainLogo.svg"
import { ReactTyped } from "react-typed";
import { useEffect, useState } from 'react';
function SecondQuestion({onComplete, questionText}) {

  return (
<>
    <div className="flex">

    <img src={FillMainLogo} alt="" className="mr-[10px] w-[28px]" />
    <div>
    
      <span className='font-bold mr-1'>
      {questionText}
      
      </span>
    <ReactTyped strings={["의 상위 몇개의 목록을 추가하고 싶나요?"]} typeSpeed={40} onComplete={onComplete} />
    <p className="text-[#323543] text-[16px]">ex) TOP 5, TOP7, TOP 10 ...</p>
</div>
    
</div>

</>
  )
}
export default SecondQuestion;