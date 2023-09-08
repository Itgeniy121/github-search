import { Link } from "react-router-dom";
import GHlogo from "../assets/github-mark-white.svg";
const Nav = () => {
  return (
    <div className='flex flex-row justify-between bg-[#4fa5c4] w-full h-[70px] items-center px-[30px]'>
      <div className='flex flex-row h-full items-center w-[200px] justify-between'>
        <img src={GHlogo} alt='logo' className='h-[40px] w-[40px]' />
        <p className='nunito-20'>GitHub Search</p>
      </div>
      <div className='flex flex-row h-full items-center w-[200px] justify-between'>
        <Link to='/' className='mont-16 hover:underline'>
          Home
        </Link>
        <Link to='favourites' className='mont-16 hover:underline'>
          Favourites Repos
        </Link>
      </div>
    </div>
  );
};

export default Nav;
