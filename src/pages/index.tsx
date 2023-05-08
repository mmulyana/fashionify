import Link from 'next/link'
import axios from 'axios'
import Image from 'next/image'
import { BaseLayout } from '@/components/Layout'
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
      <section>
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
