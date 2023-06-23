import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: false,
    buysell:true
  },
  reducers: {
    ordermodal: (state,action) => {
      state.value=action.payload
    },
    buysell: (state,action) => {
      state.buysell  =action.payload
    },
   
  }
})

// Action creators are generated for each case reducer function
export const { buysell, incrementByAmount ,ordermodal} = counterSlice.actions

export default counterSlice.reducer