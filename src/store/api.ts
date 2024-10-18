import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const url = "https://dummyjson.com/";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: url }), 
  endpoints: (builder) => ({
    getPosts: builder.query<any, void>({
      query: () => "posts",
    }),
    getPost: builder.query<any, number>({
      query: (id) => `posts/${id}`,
    }),
    searchPost: builder.query<any, string>({
      query: (field) => `posts/search?q=${field}`,
    }),
    sortPosts: builder.query<any, { field: string, direct: string }>({
      query: ({field, direct}) => `posts?sortBy=${field}&order=${direct}`,
    }),
  }),
});

export const { useGetPostsQuery, useGetPostQuery } = api;
