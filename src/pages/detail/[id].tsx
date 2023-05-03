import { BaseLayout } from '@/components/layout'
import axios from 'axios'
import { GetServerSideProps } from 'next'
import { ParsedUrlQuery } from 'querystring'

interface Params extends ParsedUrlQuery {
  slug: string
}

export default function Detail({ data }: { data: any }) {
  return (
    <BaseLayout meta={{ title: data.title, description: data.description }}>
      <div className='container'>
        <p className='text-sm text-slate-300'>
          Home / <span className='text-slate-800 font-semibold'>{data.category}</span>
        </p>
        <div className='mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='h-80 bg-gray-200 flex justify-center p-8 rounded-lg'>
            <img
              src={data.image}
              className='h-full object-fit mix-blend-multiply'
            />
          </div>
          <div>
            <h1 className='text-2xl text-slate-800 font-semibold'>
              {data.title}
            </h1>
            <p className='mt-2 text-xl font-semibold text-slate-600'>
              $ {data.price}
            </p>
            <div className='mt-4'>
              <p className='text-slate-400 text-xs'>Description</p>
              <p className='mt-2 text-slate-600 text-sm'>{data.description}</p>
            </div>
          </div>
          <div className='rounded-lg border border-gray-300'>
            <div className='py-3 border-b border-gray-300 px-4'>
              <p>Order Now</p>
            </div>
            <div className='px-4'>
              <button className='py-3 rounded-full w-full mt-2 bg-slate-800 hover:bg-slate-900 text-white text-sm'>
                Add to Cart
              </button>
            </div>
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
