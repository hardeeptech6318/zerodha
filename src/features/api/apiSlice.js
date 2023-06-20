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

export const holdingsApi = createApi({
    reducerPath: 'holdingsApi',
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

  
  export const profileApi = createApi({
    reducerPath: 'profileApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost:5000',
    }),
    tagTypes: ['Profile'],
    endpoints: (builder) => ({
      getProfile: builder.query({
        query: () => '/profile',
      }),
   
      profile: builder.mutation({
      query: (body) => ({
          headers:{
  "Content-type":"application/json"
          },
        url: '/profile',
        method: 'POST',
        body,
      }),
    }),
  }),
  
  })


  export const marginsApi = createApi({
    reducerPath: 'marginsApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost:5000',
    }),
    tagTypes: ['Margins'],
    endpoints: (builder) => ({
      getMargins: builder.query({
        query: () => '/margins',
      }),
   
      margins: builder.mutation({
      query: (body) => ({
          headers:{
  "Content-type":"application/json"
          },
        url: '/margins',
        method: 'POST',
        body,
      }),
    }),
  }),
  
  })

  
  
  




export const { useGetPostsQuery ,usecreateUserMutation } = apiSlice
export const { useGetHoldingsQuery,useholdingsMutation} = holdingsApi
export const { useGetProfileQuery,useprofileMutation} = profileApi
export const { useGetMarginsQuery,usemarginsMutation} = marginsApi
