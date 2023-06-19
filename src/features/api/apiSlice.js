import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000',
  }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => '/marketwatch',
    }),
 
  createUser: builder.mutation({
    query: (body) => ({
        headers:{
"Content-type":"application/json"
        },
      url: '/marketwatch',
      method: 'POST',
      body,
    }),
  }),
}),

})

export const holdings = createApi({
    reducerPath: 'apiSlice',
    baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost:5000',
    }),
    tagTypes: ['Holdings'],
    endpoints: (builder) => ({
      getHoldings: builder.query({
        query: () => '/holdings',
      }),
   
    holdings: builder.mutation({
      query: (body) => ({
          headers:{
  "Content-type":"application/json"
          },
        url: '/holdings',
        method: 'POST',
        body,
      }),
    }),
  }),
  
  })
  
  
  
  




export const { useGetPostsQuery ,usecreateUserMutation } = apiSlice
export const { useGetHoldingsQuery,useholdingsMutation} = holdings
