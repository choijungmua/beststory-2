import Union from "../assets/images/Union.svg";
import useToggle from "../hooks/useToggle";
import mainLogo from "../assets/images/mainLogo.svg";
const SignIn = () => {
  const [falseValue, setFalseValue] = useToggle();
  return (
    <section className="w-[100vw] h-[calc(100vh-80px)] flex justify-center items-center bg-[#F3F3F3]">
      <div className="flex flex-col w-[508px] justify-center items-center">
        <div className="text-left w-full pl-[30px]">
          <div className="flex items-center gap-1">
            <img src={mainLogo} alt="" />
            <h2 className="text-[26px]">회원가입</h2>
          </div>
          <p className="my-[30px] text-[20px]">사용자 정보를 입력하세요.</p>
        </div>
        <div className="flex flex-col w-full bg-white border rounded-[10px] border-tertiary gap-[30px] px-[30px] py-[40px]">
          <div className="relative py-4 h-[48px]">
            <input
              id="password"
              type="password"
              className={`w-full ${
                falseValue ? `border-ring-blue-500` : `border-error`
              } px-4 h-[48px] border border-[#D8DEF3] rounded-[3px] bg-white focus:outline-none focus:ring-1 focus:ring-blue-500`}
              placeholder=" "
            />
            <label
              htmlFor="password"
              className={`absolute px-2 bg-white top-0 left-3  ${
                falseValue ? "text-text" : "text-error"
              }`}
            >
              닉네임*
            </label>
          </div>
          <div className="relative py-4 h-[48px]">
            <input
              id="password"
              type="password"
              className={`w-full ${
                falseValue ? `border-ring-blue-500` : `border-error`
              } px-4 h-[48px] border border-[#D8DEF3] rounded-[3px] bg-white focus:outline-none focus:ring-1 focus:ring-blue-500`}
              placeholder=" "
            />
            <label
              htmlFor="password"
              className={`absolute px-2 bg-white top-0 left-3  ${
                falseValue ? "text-text" : "text-error"
              }`}
            >
              비밀번호*
            </label>
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className="flex gap-4 text-[#888888]">
              <span className="flex gap-2">
                <img src={Union} alt="" />
                최소 8자
              </span>
              <span className="flex gap-2">
                <img src={Union} alt="" />
                알파벳 대문자 및 소문자 조합
              </span>
            </div>
            <div className="relative py-4 h-[48px]">
              <input
                id="password"
                type="password"
                className={`w-full ${
                  falseValue ? `border-ring-blue-500` : `border-error`
                } px-4 h-[48px] border border-[#D8DEF3] rounded-[3px] bg-white focus:outline-none focus:ring-1 focus:ring-blue-500`}
                placeholder=" "
              />
              <label
                htmlFor="password"
                className={`absolute px-2 bg-white top-0 left-3  ${
                  falseValue ? "text-text" : "text-error"
                }`}
              >
                비밀번호*
              </label>
            </div>
          </div>

          <button
            onClick={setFalseValue}
            className="bg-primary text-white h-[60px] mt-[20px] w-full rounded-[3px] border bodrder-[#CCCCCC]"
          >
            계정 만들기
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
