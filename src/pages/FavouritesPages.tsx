import { useRedux } from "../hooks/useRedux";
import trash from '../assets/trash.png'
import { useActions } from "../hooks/useActions";
const FavouritesPages = () => {
  const { favourites } = useRedux(state => state.github);
  const {removeFromFavourites} = useActions()
  const removeFromFav = (fav: string) =>{
    removeFromFavourites(fav)
  }
  if (favourites.length === 0) {
    return <p className='nunito-20-v3'>Пока что нет избранных репозиториев</p>;
  }
  return (
    <div className='w-full flex flex-col justify-start items-start px-[40px] py-[40px]'>
      <p className="mont-25">Избранное:</p>
      <ol className='list-none'>
        {favourites.map(f => (
          <li key={f} className="nunito-18 my-[10px] hover:underline flex flex-row items-center">
            <a href={f} key={f} target="_blank">{f}</a>
            <img src={trash} key={f} alt="icon" className="w-[20px] h-[20px] ml-[10px] cursor-pointer" onClick={() => removeFromFav(f)}/>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default FavouritesPages;
