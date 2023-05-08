import { selectCart } from '@/redux/reducers/cart'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux'

export default function index() {
  const { data } = useSelector(selectCart)
  return (
    <div className='fixed top-24 right-4 min-h-[calc(100vh-120px)] h-fit w-96 bg-white rounded-lg shadow-lg border border-gray-200 p-4'>
      <div className='flex justify-between items-center'>
        <p className='text-slate-800 font-semibold'>
          Cart{' '}
          <span className='text-slate-500 text-sm font-normal'>
            ({data.length})
          </span>
        </p>
        <Link href='/cart' className='text-sm text-blue-600'>
          View all
        </Link>
      </div>
      <div className='mt-4 flex flex-col gap-2'>
        {data.map((data) => (
          <div key={data.id} className='grid grid-cols-[80px_1fr] gap-4'>
            <div className='bg-gray-100 w-20 h-20 p-2 rounded-md'>
              <Image
                src={data.image}
                alt={data.title}
                width={80}
                height={80}
                className='object-contain w-full h-full mix-blend-multiply'
              />
            </div>
            <div className='flex justify-between items-end'>
              <div>
                <p className='text-slate-800 font-semibold text-sm'>
                  {data.title}
                </p>
                <p className='text-slate-400 text-xs'>x{data.qty}</p>
              </div>
              <div>
                <p>${data.price * data.qty}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
