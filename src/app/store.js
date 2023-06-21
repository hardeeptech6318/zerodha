import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { apiSlice, holdingsApi,profileApi,marginsApi,marketwatchApi,ordersApi } from '../features/api/apiSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [holdingsApi.reducerPath]: holdingsApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [marginsApi.reducerPath]: marginsApi.reducer,
    [marketwatchApi.reducerPath]: marketwatchApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware,holdingsApi.middleware,profileApi.middleware,marginsApi.middleware,marketwatchApi.middleware,ordersApi.middleware),
    
})
setupListeners(store.dispatch)