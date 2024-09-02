import github from "../assets/images/github.svg";
import facebook from "../assets/images/facebook.svg";
import google from "../assets/images/google.svg";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
const LoginComponent = ({ platform }) => {
  const navigate = useNavigate();
  // Render the component
  const handleGoogleSign = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
      .then((data) => {
        navigate("/");
        console.log(data);
        alert("로그인 되었습니다.");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      {platform === "google" && (
        <button
          onClick={handleGoogleSign}
          className="bg-white text-text rounded-[10px] max-sm:w-full gap-[10px] w-[500px] h-[50px] flex justify-center items-center shadow-md border border-tertiary"
        >
          <img src={google} alt="" />
          <p>구글로 로그인</p>
        </button>
      )}
      {platform === "github" && (
        <button className="bg-black text-white rounded-[10px] max-sm:w-full gap-[10px] w-[500px] h-[50px] flex justify-center items-center shadow-md border border-tertiary">
          <img src={github} alt="" />
          <p>깃허브로 로그인</p>
        </button>
      )}
      {platform === "facebook" && (
        <button className="bg-[#385499] text-white rounded-[10px] max-sm:w-full gap-[10px] w-[500px] h-[50px] flex justify-center items-center shadow-md border border-tertiary">
          <img src={facebook} alt="" />
          <p>페이스북으로 로그인</p>
        </button>
      )}
    </>
  );
};
export default LoginComponent;
