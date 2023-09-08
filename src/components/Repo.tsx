import { FC, useReducer, useState } from "react";
import book from "../../src/assets/book.png";
import { useActions } from "../hooks/useActions";
import { useRedux } from "../hooks/useRedux";
interface RepoProps {
  name: string;
  privacy: boolean;
  url: string;
  description: string;
  watchers: number;
}
const Repo: FC<RepoProps> = ({ name, privacy, url, description, watchers }) => {
  const { addToFavourites, removeFromFavourites } = useActions();
  const { favourites } = useRedux(state => state.github);
  const [isFavourite, setIsFavourite] = useState(favourites.includes(url));
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addToFavourites(url);
    setIsFavourite(true)
  };
  const removeFromRepos = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    removeFromFavourites(url);
    setIsFavourite(false)
  };

  return (
    <div className='w-[600px] h-[150px] border-[2px] border-[#787A7A] rounded-[7px] mb-[20px] px-[10px] py-[10px] flex flex-col hover:bg-[#c1c1c1]'>
      <a href={url} target='_blank'>
        <div className='flex flex-row items-center justify-start'>
          <img src={book} alt='book' className='w-[25px] h-[25px]' />
          <p className='nunito-18 mx-[15px]'>{name}</p>
          <p className='border-[1px] border-[#989a9a] w-[40px] h-[25px] flex items-center justify-center rounded-[20px] mont-11'>
            {privacy ? "Private" : "Public"}
          </p>
        </div>
        <div className='mt-[5px]'>
          <p className='description'>{description}</p>
        </div>
        <div className='mt-[5px]'>
          <p className='mont-14'>Watchers: {watchers}</p>
        </div>
        {!isFavourite && <button
          onClick={clickHandler}
          className='border-none w-[150px] bg-[#4fa5c4] h-[30px] rounded-[5px] mt-[10px]'
        >
          <p className='mont-11-v2'>Add to Favourites</p>
        </button>}

        {isFavourite && <button
          onClick={removeFromRepos}
          className='border-none w-[100px] ml-[5px] bg-[#ca502c] h-[30px] rounded-[5px] mt-[10px]'
        >
          <p className='mont-11-v2'>Remove</p>
        </button>}
      </a>
    </div>
  );
};

export default Repo;
