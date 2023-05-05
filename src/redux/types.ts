import { Iproduct } from '@/models/products'

interface cartProduct extends Iproduct {
  sum: number
}

export interface cartItem {
  data: cartProduct[] | null
}
