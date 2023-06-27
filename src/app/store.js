import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { apiSlice, holdingsApi,profileApi,marginsApi,marketwatchApi,ordersApi,positionsApi ,tradesApi,signinApi} from '../features/api/apiSlice'
import counterReducer from '../features/api/globalstate'
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [holdingsApi.reducerPath]: holdingsApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [marginsApi.reducerPath]: marginsApi.reducer,
    [marketwatchApi.reducerPath]: marketwatchApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
    [positionsApi.reducerPath]: positionsApi.reducer,
    [tradesApi.reducerPath]: tradesApi.reducer,
    [signinApi.reducerPath]: signinApi.reducer,
    counter: counterReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware,holdingsApi.middleware,
    profileApi.middleware,marginsApi.middleware,marketwatchApi.middleware,ordersApi.middleware,
    positionsApi.middleware,tradesApi.middleware,signinApi.middleware),
    
})
setupListeners(store.dispatch)