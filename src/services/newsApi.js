import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const news_api_key = import.meta.env.VITE_NEWS_API_KEY;

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://newsapi.org/v2",
  }),
  endpoints: (builder) => ({
    //Get Top Headlines
    getTopHeadlines: builder.query({
      query: ({ categoryName }) =>
        `top-headlines?country=us&category=${categoryName}&apiKey=${news_api_key}`,
    }),
  }),
});

export const { useGetTopHeadlinesQuery } = newsApi;
