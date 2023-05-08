import Radio from '@/components/Radio'
import { BaseLayout } from '@/components/layout'
import axios from 'axios'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ParsedUrlQuery } from 'querystring'
import { AiFillStar, AiOutlineShoppingCart } from 'react-icons/ai'
import { useState, useEffect } from 'react'
import Counter from '@/components/Counter'
import { Iproduct } from '@/models/products'
import Card from '@/components/Card'
import { useAppDispatch } from '@/redux'
import { selectCart } from '@/redux/reducers/cart'
import { addNewItem } from '@/redux/reducers/cart'

interface Params extends ParsedUrlQuery {
  slug: string
}

type Props = { data: Iproduct }
type GetProductResponse = Iproduct

const options = [
  { label: 'S', value: 's' },
  { label: 'M', value: 'm' },
  { label: 'L', value: 'l' },
  { label: 'XL', value: 'xl' },
]

export default function Detail({ data }: Props) {
  const [selected, setSelected] = useState<string>(options[0].value)
  const [counter, setCounter] = useState<number>(1)
  const [recomendations, setRecomendations] = useState<Iproduct[]>([])
  const dispatch = useAppDispatch()

  const getRecomendation = async (): Promise<any> => {
    const url = `${
      process.env.NEXT_PUBLIC_API
    }/products/category/${data.category.split(' ').join('%20')}`
    const { data: res } = await axios(url)
    setRecomendations(res)
  }

  useEffect(() => {
    getRecomendation()
  }, [])

  useEffect(() => {
    return () => {
      setCounter(1), setSelected(options[0].value)
    }
  }, [data])

  return (
    <BaseLayout meta={{ title: data.title, description: data.description }}>
      <div className='container pb-12'>
        <p className='text-sm text-slate-300'>
          <Link href='/'>Home</Link>
          <span> / </span>
          <Link href={`${data.category}`}>
            <span className='text-slate-800 font-semibold'>
              {data.category}
            </span>
          </Link>
        </p>
        <div className='mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='h-96 bg-gray-200 flex justify-center px-10 py-6 rounded-lg'>
            <Image
              alt={data.title}
              src={data.image}
              className='object-fit w-60 mix-blend-multiply'
              width={1200}
              height={1200}
            />
          </div>
          <div>
            <h1 className='text-2xl text-slate-800 font-semibold'>
              {data.title}
            </h1>
            <div className='text-sm mt-2 flex gap-3 items-center'>
              <div className='flex gap-2 items-center'>
                <span className='text-yellow-500 pt-[2px]'>
                  <AiFillStar />
                </span>
                <p className='text-gray-400'>{data.rating.rate} ratings</p>
              </div>
              <div className='pt-[2px]'>
                <div className='w-1 h-1 rounded-full bg-gray-700'></div>
              </div>
              <div className='flex gap-2 items-center'>
                <p className='text-gray-800 font-semibold'>
                  {data.rating.count}
                </p>
                <p className='text-gray-400'>reviews</p>
              </div>
            </div>
            <Radio
              options={options}
              selectedOption={selected}
              onChange={(e) => setSelected(e.target.value)}
            />
            <div className='mt-8'>
              <p className='text-slate-400 text-xs'>Description</p>
              <p className='mt-2 text-slate-600 text-sm'>{data.description}</p>
            </div>
          </div>
          <div>
            <div className='rounded-lg border border-gray-300 overflow-hidden'>
              <div className='py-3 border-b border-gray-300 px-4'>
                <p>Order Now</p>
              </div>

              <div className='mt-3 px-4 pb-6'>
                <div className='flex justify-between items-center'>
                  <Counter
                    value={counter}
                    inc={() => {
                      if (counter < 21) {
                        setCounter((prev) => prev + 1)
                      }
                    }}
                    enc={() => {
                      if (counter > 1) {
                        setCounter((prev) => prev - 1)
                      }
                    }}
                  />
                  <div className='flex justify-between gap-[2px] items-center'>
                    <p className='text-gray-400 text-sm'>Stock : </p>
                    <span className='text-slate-800 text-sm font-semibold'>
                      {21 - counter}
                    </span>
                  </div>
                </div>

                <div className='flex justify-between items-center mt-3'>
                  <p className='text-sm text-gray-400'>Total</p>
                  <p className='text-xl text-slate-800 font-semibold'>
                    ${data.price * counter}
                  </p>
                </div>

                <button className='py-3 rounded-full w-full mt-2 border bg-slate-800 hover:bg-slate-900 text-white text-sm'>
                  Buy Now
                </button>
                <button
                  onClick={() => dispatch(addNewItem({ ...data, sum: counter, size: selected }))}
                  className='py-3 rounded-full w-full mt-3 border bg-gray-200 border-gray-200 hover:bg-slate-800 text-slate-800 hover:text-white text-sm flex gap-2 items-center justify-center'
                >
                  <span className='text-lg font-semibold'>
                    <AiOutlineShoppingCart />
                  </span>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-8'>
          <p className='text-xl font-semibold text-slate-800'>
            Similiar Product
          </p>
          <div className='mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
            {recomendations
              .filter((rec) => rec.id !== data.id)
              .slice(0, 5)
              .map((data) => (
                <Card key={data.id} data={data} />
              ))}
          </div>
        </div>
      </div>
    </BaseLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as Params
  const { data } = await axios(`${process.env.NEXT_PUBLIC_API}/products/${id}`)
  return {
    props: {
      data,
    },
  }
}
