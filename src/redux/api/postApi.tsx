import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const PostApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://192.168.11.35:4500/',
  }),
  tagTypes: ['Posts', 'postList'],
  endpoints: builder => ({
    createPost: builder.mutation({
      query: data => ({
        url: `signup`,
        method: 'post',
        body: data,
      }),
      invalidatesTags: ['postList'],
    }),
  }),
});

export const {useCreatePostMutation} = PostApi;
