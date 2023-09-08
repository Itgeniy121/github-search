import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Repo, ServerResponse } from "../../types/baseTypes";
import { UserInfo } from "../../types/baseTypes";
export const githubApi = createApi({
  reducerPath: "github/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/",
  }),
  endpoints: build => ({
    searchUsers: build.query<UserInfo[], string>({
      query: (search: string) => ({
        url: "search/users",
        params: {
          q: search,
          per_page: 10,
        },
      }),
      transformResponse: (response: ServerResponse<UserInfo>) => response.items,
    }),
    getUserRepo: build.query<Repo[], string>({
      query: (username: string) => ({
        url: `users/${username}/repos`,
      }),
    }),
  }),
});

export const { useSearchUsersQuery, useLazyGetUserRepoQuery } = githubApi;
