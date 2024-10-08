import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakestoreapi.com',
  }),
  endpoints: () => ({}),
  reducerPath: 'baseApi',
  tagTypes: ['Products'],
})
