import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '..'
import { cartItem } from '../types'

const initialState: cartItem = { data: null }

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.data = action.payload
    },
  },
})

export const { setCart } = cartSlice.actions
export const selectCart = (state: RootState) => state.cart
export default cartSlice.reducer