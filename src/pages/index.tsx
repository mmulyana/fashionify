import { BaseLayout } from '@/components/layout'
import Image from 'next/image'
import heroImg from '../assets/images/ospan-ali-unsplash.jpg'
import { useLoading } from '@/hooks/useLoading'
import axios from 'axios'
import { REQUEST_URL } from '@/api'

export default function Home({ data }: { data: any[] }) {
  const { isLoading } = useLoading()

  if (!isLoading) {
    return <div className='fixed top-0 left-0 w-full h-full bg-red-500'></div>
  }

  console.log(data)

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
