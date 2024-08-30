import github from '../assets/images/github.svg';
import facebook from '../assets/images/facebook.svg';
import google from '../assets/images/google.svg';

const LoginComponent = ({ platform }) => {


  // Render the component
  return (
    <>
    {platform === 'google' && 
    <button className='bg-white text-[#323543] rounded-[10px] gap-[10px] w-[500px] h-[50px] flex justify-center items-center shadow-md border border-tertiary'>
        <img src={google} alt="" />
        <p>구글로 로그인</p>
    </button>
    }
        {platform === 'github' && 
    <button className='bg-black text-white rounded-[10px] gap-[10px] w-[500px] h-[50px] flex justify-center items-center shadow-md border border-tertiary'>
        <img src={github} alt="" />
        <p>깃허브로 로그인</p>
    </button>
    }
        {platform === 'facebook' && 
    <button className='bg-[#385499] text-white rounded-[10px] gap-[10px] w-[500px] h-[50px] flex justify-center items-center shadow-md border border-tertiary'>
        <img src={facebook} alt="" />
        <p>페이스북으로 로그인</p>
    </button>
    }
    </>
  );
};
export default LoginComponent;
