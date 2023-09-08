import { Link } from "react-router-dom";
import GHlogo from "../assets/github-mark-white.svg";
const Nav = () => {
  return (
    <div className='flex flex-row justify-between bg-[#4fa5c4] w-full h-[70px] items-center px-[30px] max-med:px-[10px]'>
      <div className='flex flex-row h-full items-center w-[200px] justify-between max-med:w-[120px]'>
        <img src={GHlogo} alt='logo' className='h-[40px] w-[40px] max-med:w-[20px] max-med:h-[20px]' />
        <p className='nunito-20 max-med:nunito-mobile max-med:text-[14px]'>GitHub Search</p>
      </div>
      <div className='flex flex-row h-full items-center w-[200px] justify-between max-med:w-[150px]'>
        <Link to='/' className='mont-16 hover:underline max-med:text-[12px]'>
          Home
        </Link>
        <Link to='favourites' className='mont-16 hover:underline max-med:text-[12px]'>
          Favourites Repos
        </Link>
      </div>
    </div>
  );
};

export default Nav;
