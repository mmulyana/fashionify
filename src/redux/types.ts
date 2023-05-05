import { Iproduct } from '@/models/products'

export interface IcartProduct extends Iproduct {
  sum: number
}

export interface IcartItem {
  data: IcartProduct[] | []
}
