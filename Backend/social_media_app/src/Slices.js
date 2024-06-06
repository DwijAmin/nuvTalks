import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState = {
  item: {},
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
   addtobasket:(state,action) =>{
       
       state.item ={...state, item: {...state.cartData, ...action.payload}}
       console.log(state.item)
   },
   removefrombasket : (state,action) =>{}
  },
})

// Action creators are generated for each case reducer function
export const { addtobasket, removefrombasket  } = basketSlice.actions;

export const selectItems = (state) => state.basket.item;


export default basketSlice.reducer