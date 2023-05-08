import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '..'
import { IcartItem } from '../types'
import { nanoid } from 'nanoid'

const initialState: IcartItem = { data: [] }

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addNewItem: (state, action) => {
      const item = state.data?.find((item) => item.id === action.payload.id)
      if (item && item.size === action.payload.size) {
        item.sum++
        return
      }
      const newItem = { ...action.payload, id_item: nanoid() } as never

      state.data.push(newItem)
    },
    removeItem: (state, action) => {
      state.data.filter((data) => data.id !== action.payload.id)
    },
  },
})

export const { addNewItem, removeItem } = cartSlice.actions
export const selectCart = (state: RootState) => state.cart
export default cartSlice.reducer
