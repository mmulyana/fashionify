import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '..'
import { IcartItem, IcartProduct } from '../types'
import { Iproduct } from '@/models/products'

const initialState: IcartItem = { data: [] }

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addNewItem: (state, action) => {
      const item = state.data?.find((item) => item.id === action.payload.id)
      if (item) {
        item.sum++
        return
      }
      const newItem = {
        ...action.payload,
        sum: 1,
      } as never
      state.data.push(newItem)
    },
    removeItem: (state, action) => {
      state.data.filter(data => data.id !== action.payload.id)
    }
  },
})

export const { addNewItem, removeItem } = cartSlice.actions
export const selectCart = (state: RootState) => state.cart
export default cartSlice.reducer
