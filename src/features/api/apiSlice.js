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


  export const marketwatchApi = createApi({
    reducerPath: 'marketwatchApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost:5000',
    }),
    tagTypes: ['Margins'],
    endpoints: (builder) => ({
      getMarketwatch: builder.query({
        query: () => '/marketwatch',
      }),
   
      addMarketwatchPost: builder.mutation({
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


  
  export const ordersApi = createApi({
    reducerPath: 'ordersApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost:5000',
    }),
    tagTypes: ['Orders'],
    endpoints: (builder) => ({
      getOrders: builder.query({
        query: () => '/orders',
      }),
   
      orders: builder.mutation({
      query: (body) => (
        {
          headers:{
  "Content-type":"application/json"
          },
        url: '/orders',
        method: 'POST',
        body,
      }),
    }),
  }),
  
  })


  export const positionsApi = createApi({
    reducerPath: 'positionApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost:5000',
    }),
    tagTypes: ['Positions'],
    endpoints: (builder) => ({
      getPositions: builder.query({
        query: () => '/positions',
      }),
   
      positions: builder.mutation({
      query: (body) => ({
          headers:{
  "Content-type":"application/json"
          },
        url: '/positions',
        method: 'POST',
        body,
      }),
    }),
  }),
  
  })

  
  
  export const tradesApi = createApi({
    reducerPath: 'tradesApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost:5000',
    }),
    tagTypes: ['Trades'],
    endpoints: (builder) => ({
      credentials: "include",
      headers:{
        "Authorization":localStorage.getItem('token'),
        "Content-type":"application/json"
      },
      getTrades: builder.query({
        query: () => '/trades',
      }),
   
      trades: builder.mutation({
      query: (body) => ({
          headers:{
            "authorization":localStorage.getItem('token'),
            "Content-type":"application/json"
          },
        url: '/trades',
        method: 'POST',
        body,
      }),
    }),
  }),
  
  })


  export const signinApi = createApi({
    reducerPath: 'signIn',
    baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost:5000',
    }),
    tagTypes: ['Signin'],
    endpoints: (builder) => ({
      getSignin: builder.query({
        query: () => '/signin',
      }),
   
      signin: builder.mutation({
      query: (body) => ({
        // mode:"same-origin",
        // "SameSite":"none",
        // "secure":true,
        redirect:"follow",
        // credentials: "include",
        // credentials: 'include',
        // redirect: 'follow'
          headers:{
  "Content-type":"application/json"
          },
        url: '/signin',
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
export const { useGetMarketwatchQuery,useAddMarketwatchPostMutation} = marketwatchApi
export const { useGetOrdersQuery,useordersMutation} = ordersApi
export const { useGetPositionsQuery,usepositionMutation} = positionsApi
export const { useGetTradesQuery,usetradesMutation} = tradesApi
export const { useGetSigninQuery,useSigninMutation} = signinApi