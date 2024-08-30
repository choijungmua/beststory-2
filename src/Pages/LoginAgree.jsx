import { useNavigate } from "react-router-dom";
import useToggle from "../hooks/useToggle";
import { useEffect } from "react";
const LoginAgree = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용
  const [isAllChecked, setIsAllChecked] = useToggle();
  const [isCheck1, setIsCheck1] = useToggle();
  const [isCheck2, setIsCheck2] = useToggle();
  const [isCheck3, setIsCheck3] = useToggle();
  useEffect(() => {
    setIsCheck1();
    setIsCheck2();
    setIsCheck3();
  }, [isAllChecked]);

  // 모든 체크박스 상태가 false일 때 버튼 비활성화
  const isButtonDisabled = !(isCheck1 || isCheck2 || isCheck3);
  const check = `제1조(목적)

이 약관은 00 회사가 운영하는 00사이버 물(이하 “을”이라 한다)에서 제공하는 인터넷 관련 서비스(이하 “서비스”라 한다)를 이용함에 있어 사이버 몰과 이용자의 권리 의무 및 책임사항을 규정함을 목적으로 합니다.

PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다.

제 2조(정의)

제1조(목적)
이 약관은 00 회사가 운영하는 00사이버 물(이하 “을”이라 한다)에서 제공하는 인터넷 관련 서비스(이하 “서비스”라 한다)를 이용함에 있어 사이버 몰과 이용자의 권리 의무 및 책임사항을 규정함을 목적으로 합니다.

PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다.

제1조(목적)
이 약관은 00 회사가 운영하는 00사이버 물(이하 “을”이라 한다)에서 제공하는 인터넷 관련 서비스(이하 “서비스”라 한다)를 이용함에 있어 사이버 몰과 이용자의 권리 의무 및 책임사항을 규정함을 목적으로 합니다.

PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다.

제 2조(정의)

제1조(목적)
이 약관은 00 회사가 운영하는 00사이버 물(이하 “을”이라 한다)에서 제공하는 인터넷 관련 서비스(이하 “서비스”라 한다)를 이용함에 있어 사이버 몰과 이용자의 권리 의무 및 책임사항을 규정함을 목적으로 합니다.

PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다.
`;
  return (
    <section className="w-[100vw] h-[calc(100vh-80px)] flex justify-center items-center bg-[#F3F3F3]">
      <div className="bg-white absolute border border-tertiary flex flex-col gap-[5px] rounded-[10px] p-[20px]">
        <span className="flex items-center mb-5px py-[15px] border-b-2 gap-[8px] text-text font-bold">
          <input
            type="checkbox"
            name=""
            id=""
            checked={!isAllChecked}
            onChange={setIsAllChecked}
            className="w-[20px] h-[20px] border"
          />
          모든 약관을 확인하고 전체 동의합니다.
        </span>
        <span className="flex py-[10px] items-center gap-[8px] text-text text-[14px]">
          <input
            type="checkbox"
            name=""
            id=""
            checked={!isCheck1}
            onChange={setIsCheck1}
            className="w-[20px] h-[20px] border"
          />
          이용약관 동의 (필수)
        </span>
        <div className="w-[405px] h-[148px] border border-[#CCCCCC] rounded-[3px] overflow-auto white-space: whitespace-pre-wrap">
          {check}
        </div>
        <span className="flex py-[10px] items-center gap-[8px] text-text text-[14px]">
          <input
            type="checkbox"
            name=""
            id=""
            checked={!isCheck2}
            onChange={setIsCheck2}
            className="w-[20px] h-[20px] border"
          />
          개인정보 수집 및 이용 동의 (필수)
        </span>
        <div className="w-[405px] h-[148px] border border-[#CCCCCC] rounded-[3px] overflow-auto white-space: whitespace-pre-wrap">
          {check}
        </div>
        <span className="flex py-[10px] items-center gap-[8px] text-text text-[14px]">
          <input
            type="checkbox"
            name=""
            id=""
            checked={!isCheck3}
            onChange={setIsCheck3}
            className="w-[20px] h-[20px] border"
          />
          이메일 수신 동의 (선택)
        </span>
        <div className="w-[405px] h-[148px] border border-[#CCCCCC] rounded-[3px] overflow-auto white-space: whitespace-pre-wrap">
          {check}
        </div>
        <div className="flex gap-[5px]">
          <button
            onClick={() => navigate(-1)}
            className="w-1/2 rounded-[3px] py-[10px] px-auto bg-[#EAEAEA] border border-[#CCCCCC]"
          >
            취소
          </button>
          <button
            disabled={!isButtonDisabled}
            className="w-1/2 rounded-[3px] py-[10px] text-white px-auto bg-primary border border-[#CCCCCC] disabled:text-text disabled:bg-[#EAEAEA]"
          >
            다음
          </button>
        </div>
      </div>
    </section>
  );
};

export default LoginAgree;
