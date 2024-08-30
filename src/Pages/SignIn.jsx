import Union from "../assets/images/Union.svg"
const SignIn = () => {
    return(
<section className="w-[100vw] h-[calc(100vh-80px)] flex justify-center items-center bg-[#F3F3F3]">

    <div className="flex flex-col w-[508px] justify-center items-center">
        <div className="text-left w-full pl-[30px]">

        <h2 className="text-[26px]">회원가입</h2>
        <p className="my-[30px] text-[20px]">사용자 정보를 입력하세요.</p>
        </div>
        <div className="flex flex-col w-full bg-white border rounded-[10px] border-tertiary gap-[30px] px-[30px] py-[40px]">
      <input
        type="text"
        id="nickname"
        className="h-[48px] rounded-[3px] w-full border border-[#D8DEF3]"
        placeholder=" "
      />
      <div className="flex flex-col gap-[10px]">
      <input
        type="text"
        id="nickname"
        className="h-[48px] rounded-[3px] w-full border border-[#D8DEF3]"
        placeholder=" "
        />
        <div className="flex gap-4 text-[#888888]">
        <span className="flex gap-2">
            <img src={Union} alt="" /> 
            최소 8자</span>
        <span className="flex gap-2">
            <img src={Union} alt="" /> 
            알파벳 대문자 및 소문자 조합</span>
            </div>
            <input
        type="text"
        id="nickname"
        className="h-[48px] rounded-[3px] w-full border border-[#D8DEF3]"
        placeholder=" "
        />
        <button className="bg-primary text-white h-[60px] w-full rounded-[3px] border bodrder-[#CCCCCC]">계정 만들기</button>
        </div>
    </div>
    </div>
</section>

    )
}

export default SignIn;
