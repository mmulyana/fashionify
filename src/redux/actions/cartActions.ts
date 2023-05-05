import { Iproduct } from '@/models/products'
import { useSelector } from 'react-redux'
import { selectCart, setCart } from '../reducers/cart'
import { Dispatch } from 'react'
import { AnyAction } from 'redux'
const { data } = useSelector(selectCart)

class CartAction {
  static addNewCartItem(payload: Iproduct) {
    const hasInCart = data?.filter((data) => data.id === payload.id)
    const index = data?.findIndex((data) => data.id === payload.id)
    if (data === null) return

    if (hasInCart) {
      if (index) data[index].sum += 1
    } else {
      const newItem = {
        ...payload,
        sum: 1,
      }
    }
    return (dispatch: Dispatch<AnyAction>) => {
      dispatch(setCart(data))
    }
  }
}

export default CartAction