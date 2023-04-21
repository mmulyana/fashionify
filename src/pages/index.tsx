import { BaseLayout } from '@/components/layout'
import Image from 'next/image'
import heroImg from '../assets/images/priscilla-du-preez-unsplash.jpg'
import { useLoading } from '@/hooks/useLoading'
import axios from 'axios'
import { REQUEST_URL } from '@/api'

export default function Home({ data }: { data: any[] }) {
  const { isLoading } = useLoading()

  if (!isLoading) {
    return <div className='fixed top-0 left-0 w-full h-full bg-red-500'></div>
  }

  return (
    <BaseLayout
      meta={{ title: 'Ease market', description: 'ecommerce fakestore api' }}
    >
      <div className='-mt-32'>
        <div className='h-[520px] relative from-[#F0F0F1] to-[#F3F4F6] bg-gradient-to-t'>
          <Image
            src={heroImg.src}
            alt='model'
            className='absolute top-0 right-0 h-full w-full object-fit object-bottom'
            height={1200}
            width={1400}
          />
        </div>
      </div>

      <section className='py-8 pb-20'>
        <div className='container'>
          <h4 className='mt-4 text-orange-600 font-medium text-xl'>
            RECENT COLLECTION
          </h4>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-6'>
            {data.map(({ title, price, image, id }) => (
              <div
                key={id}
                className='p-2 pb-12 border-[0.5px] border-gray-200 hover:outline-orange-600 hover:outline hover:z-10 bg-white/40 hover:bg-white hover:shadow-lg hover:shadow-slate-300'
              >
                <div className='h-56 flex items-center justify-center rounded relative bg-gray-100'>
                  <img src={image} className='h-40 mix-blend-multiply' />
                  <p className='absolute top-2 right-3 text-2xl font-bold text-orange-600'>
                    <span className='text-lg font-medium'>$</span>
                    {price}
                  </p>
                </div>
                <div className='mt-6'>
                  <p className='text-sm text-gray-800 text-center'>{title}</p>
                </div>
              </div>
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
