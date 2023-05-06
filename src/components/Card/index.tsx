import { Iproduct } from '@/models/products'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillStar } from 'react-icons/ai'

type Props = {
  data: Iproduct
}

export default function Card({ data }: Props) {
  return (
    <div className='h-fit hover:bg-white'>
      <div className='h-40 bg-gray-100 rounded-lg overflow-hidden py-3'>
        <Image
          alt={data.title}
          src={data.image}
          width={400}
          height={320}
          className='object-contain h-full mix-blend-multiply'
        />
      </div>
      <div className='p-2'>
        <Link href={`/detail/${data.id}`} className='font-semibold text-slate-800 text-sm'>{data.title}</Link>
        <div className='flex items-center justify-between'>
          <div className='flex gap-2 items-center'>
            <span className='text-yellow-500'>
              <AiFillStar />
            </span>
            <p className='text-gray-400 text-sm'>{data.rating.rate}</p>
            <span className='text-gray-400 text-xs'>|</span>
            <p className='text-gray-400 text-sm'>{data.rating.count}</p>
          </div>
          <p className='text-emerald-800 font-semibold text-lg'>
            ${data.price}
          </p>
        </div>
      </div>
    </div>
  )
}
