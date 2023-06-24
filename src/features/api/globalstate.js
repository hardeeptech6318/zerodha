import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: false,
    buysell:true,
    data:{}
  },
  reducers: {
    ordermodal: (state,action) => {
      state.value=action.payload
    },
    buysell: (state,action) => {
      state.buysell  =action.payload
    },
    golbaldata:(state,action) => {
      state.data  =action.payload
    },

   
  }
})

// Action creators are generated for each case reducer function
export const { buysell,ordermodal,golbaldata} = counterSlice.actions

export default counterSlice.reducer