import React, { useState } from 'react';
import send from "../assets/images/send.svg";

const RoomPrompt = ({ handlePromptSubmit, questionNumber, newInputState }) => {
    const [inputValue, setInputValue] = useState("");

    // 폼 제출 처리
    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() === "") return; // 빈 입력값 제출 방지

        // 입력값을 상위 컴포넌트로 전달
        handlePromptSubmit(inputValue);

        // 입력 필드 초기화
        setInputValue("");
    };

    return (
        <form onSubmit={onSubmit} className={`w-full border rounded-[10px] ${newInputState ? "opacity-50" : "opacity-80"} bg-white border-tertiary`}>
            <div className="gap-[10px] justify-between h-[76px] flex">
                <input
                    value={inputValue}
                    type="text"
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="내용을 입력하세요"
                    className="w-full text-[20px] pl-[20px]  text-[#323543] placeholder:text-tertiary flex items-center"
                    disabled={newInputState}
                />
                <button type="submit" className="flex mr-[20px] items-center">
                    <img src={send} alt="Send" className="w-[30px]" />
                </button>
            </div>
        </form>
    );
};

export default RoomPrompt;
