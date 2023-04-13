import { BaseLayout } from '@/components/layout'
import Image from 'next/image'
import heroImg from '../assets/images/ospan-ali-unsplash.jpg'
import { useLoading } from '@/hooks/useLoading'
import axios from 'axios'
import { REQUEST_URL } from '@/api'

export default function Home({ data }: { data: any[] }) {
  const { isLoading } = useLoading()
  console.log(data)

  if (!isLoading) {
    return <div className='fixed top-0 left-0 w-full h-full bg-red-500'></div>
  }

  return (
    <BaseLayout
      meta={{ title: 'Ease market', description: 'ecommerce fakestore api' }}
    >
      <div className='container pt-2'>
        <div className='rounded-2xl h-[440px] relative overflow-hidden from-[#F0F0F1] to-[#F3F4F6] bg-gradient-to-t'>
          <Image
            src={heroImg.src}
            alt='model'
            className='absolute top-0 right-0 h-full object-fit object-bottom'
            height={640}
            width={400}
          />
        </div>
      </div>

      <section className='py-4 bg-gray-100 mt-8'>
      <div className='container mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
        {data.map(({ description, title, price, rating, image, id }) => (
          <div key={id} className='p-2 pb-12 border-[0.5px] border-gray-200 bg-white/40 hover:bg-white hover:shadow-lg hover:shadow-slate-300'>
            <div className='h-48 flex items-center justify-center rounded relative bg-white'>
              <img src={image} className='h-32' />
              <p className='absolute top-2 right-2 text-2xl font-bold text-orange-600'>
                <span className='text-lg font-medium'>$</span>
                {price}
              </p>
            </div>
            <div className='mt-6'>
              <p className='text-sm text-gray-800'>{title}</p>
            </div>
          </div>
        ))}
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
