import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const url = "https://dummyjson.com/";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: (builder) => ({
    getPosts: builder.query<any, void>({
      query: () => "posts",
    }),
    getPost: builder.query<any, any>({
      query: (id) => `posts/${id}`,
    }),
    getComments: builder.query<any, any>({
      query: (id) => `comments/post/${id}`,
    }),
    getUser: builder.query<any, any>({
      query: (id) => `users/${id}`,
    }),
    searchPost: builder.query<any, string>({
      query: (field) => `posts/search?q=${field}`,
    }),
    sortPosts: builder.query<any, { field: string; direct: string }>({
      query: ({ field, direct }) => `posts?sortBy=${field}&order=${direct}`,
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useGetCommentsQuery,
  useGetUserQuery,
} = api;
