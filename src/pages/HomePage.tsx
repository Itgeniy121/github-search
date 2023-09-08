import { useEffect, useState } from "react";
import {
  useLazyGetUserRepoQuery,
  useSearchUsersQuery,
} from "../store/forGitHub/githubApi";
import { useSearch } from "../hooks/useSearch";
import Repo from "../components/Repo";

const HomePage = () => {
  const [search, setSearch] = useState("");
  const debounce = useSearch(search);
  const [dropdown, setDropdown] = useState(false);
  const { isLoading, isError, data } = useSearchUsersQuery(debounce, {
    skip: debounce.length < 3,
  });

  const [fetchRepos, { data: repos, isLoading: reposIsLoading }] =
    useLazyGetUserRepoQuery();
  useEffect(() => {
    if (debounce.length === 0) {
      setDropdown(false);
    } else setDropdown(true);
  }, [debounce]);

  const clickOnUser = (username: string) => {
    fetchRepos(username);
  };

  return (
    <div className='w-full flex-row flex justify-between items-start px-[100px] max-xl:px-[30px] max-sm:flex-col max-med:px-[10px]'>
      {isError && <p>Что-то произошло</p>}
      <div className='relative pt-[30px] mr-[20px]'>
        <input
          type='text'
          className='border py-[2px] px-[6px] w-[500px] h-[40px] outline-none max-med:w-[300px]'
          placeholder='Введите GitHub логин'
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        {dropdown && (
          <ul className='absolute list-none shadow-md bg-white w-[500px] px-[6px] py-[2px] overflow-y-auto'>
            {isLoading && <p className='mont-16-v2'>Loading ...</p>}
            {data?.map(user => (
              <li
                key={user.id}
                className='hover:bg-[#4fa5c4] mont-16-v2 cursor-pointer'
                onClick={() => clickOnUser(user.login)}
              >
                {user.login}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className='flex flex-col justify-normal items-start w-[620px] h-[600px] overflow-y-auto mt-[30px] max-l:w-[400px] max-med:w-[300px]'>
        <h1 className='nunito-20-v2'>Репозитории:</h1>
        {reposIsLoading && <p className='mont-16-v2'>Loading ...</p>}
        {repos?.map(repo => (
          <Repo
            key={repo.id}
            name={repo.name}
            privacy={repo.private}
            url={repo.html_url}
            description={repo.description}
            watchers={repo.watchers}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
