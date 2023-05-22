
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productapi = createApi({
  reducerPath: 'productapi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getallProduct: builder.query({
      query: () => 'products',
    }),
    getProduct: builder.query({
      query: (product) => `products/search?q=${product}`,
    }),
  }),
});

export const { useGetallProductQuery , useGetProductQuery } = productapi;