// PasswordResetPage.jsx
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase-config";

const PasswordResetPage = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (email === "") {
      setIsValidEmail(false);
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setIsEmailSent(true);
    } catch (err) {
      setError("비밀번호 재설정 이메일을 보내는 중 오류가 발생했습니다.");
    }
  };

  return (
    <section className="w-full h-[calc(100vh-80px)] flex justify-center items-center bg-gray-100">
      <div className="bg-white border border-gray-300 flex flex-col gap-4 rounded-lg p-6 shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold text-gray-700 mb-4">
          비밀번호 재설정
        </h2>

        <p className="text-gray-600 mb-4">
          비밀번호 재설정을 위해 이메일 주소를 입력해주세요. 이메일로 비밀번호
          재설정 링크를 보내드립니다.
        </p>

        {isEmailSent ? (
          <p className="text-green-500 text-sm">
            비밀번호 재설정 링크가 이메일로 전송되었습니다.
          </p>
        ) : (
          <div className="flex flex-col gap-4">
            <label className="flex flex-col text-gray-600">
              <span className="text-sm font-semibold mb-1">이메일 주소</span>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setIsValidEmail(true);
                  setError("");
                }}
                className={`border p-2 rounded-md ${
                  !isValidEmail ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="이메일 주소 입력"
              />
              {!isValidEmail && (
                <span className="text-red-500 text-sm mt-1">
                  유효한 이메일 주소를 입력해 주세요.
                </span>
              )}
              {error && (
                <span className="text-red-500 text-sm mt-1">{error}</span>
              )}
            </label>

            <div className="flex gap-4">
              <button
                onClick={() => window.history.back()}
                className="flex-1 rounded-md py-2 px-4 bg-gray-200 border border-gray-300 text-gray-700 hover:bg-gray-300 transition duration-200"
              >
                취소
              </button>
              <button
                onClick={handleSubmit}
                disabled={!email}
                className={`flex-1 rounded-md py-2 px-4 text-white border border-gray-300 ${
                  email
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-gray-400 cursor-not-allowed"
                } transition duration-200`}
              >
                비밀번호 재설정
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PasswordResetPage;
