import Link from 'next/link'
import axios from 'axios'
import Image from 'next/image'
import { BaseLayout } from '@/components/layout'
import { REQUEST_URL } from '@/api'
import { Iproduct } from '@/models/products'

import heroImg from '@/assets/images/hero.jpg'
import { addNewItem } from '@/redux/reducers/cart'
import Card from '@/components/Card'

type Props = { data: Iproduct[] }

export default function Home({ data }: Props) {
  return (
    <BaseLayout
      meta={{ title: 'fashionify', description: 'ecommerce fakestore api' }}
    >
      {/* <div className='px-4'>
        <div className='h-[400px] relative rounded-2xl overflow-hidden'>
          <Image
            src={heroImg.src}
            alt='model'
            className='absolute top-0 right-0 h-full w-full object-fit object-bottom'
            height={1200}
            width={1400}
          />
        </div>
      </div> */}

      <section className=''>
        <div className='container'>
          <h4 className='mt-4 text-slate-800 font-medium text-xl'>
            RECENT COLLECTION
          </h4>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6 gap-4'>
            {data.map((data) => (
              <Card key={data.id} data={data} />
            ))}
          </div>
        </div>
      </section>

      <section className='mt-20 mb-40'>
        <div className='container'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            <h4 className='text-slate-800 text-[3rem] font-bold leading-tight'>
              Bringing Element of style
            </h4>
            <div className='pl-0 lg:pl-12'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique ducimus sint perspiciatis, quaerat expedita sunt earum
                libero animi, officia nisi aperiam quod. Voluptatum iusto
                veritatis aspernatur quaerat necessitatibus! Sapiente,
                accusamus?
              </p>
            </div>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12'>
            <div className='h-64 bg-gray-800'></div>
            <div className='h-64 bg-gray-800'></div>
          </div>
        </div>
      </section>
    </BaseLayout>
  )
}

export async function getServerSideProps() {
  const { data } = await axios(REQUEST_URL.womanProduct)
  return {
    props: {
      data,
    },
  }
}
