import React from 'react'
import { ReactTyped } from "react-typed";

export default function QuestionInput({submittedValue}) {
  return (
<div className="border border-tertiary bg-[#F3F3F3] rounded-[10px] p-[20px] mt-[10px] mb-[30px]">
<ReactTyped strings={[submittedValue]} typeSpeed={40} />
</div>
  )
}

