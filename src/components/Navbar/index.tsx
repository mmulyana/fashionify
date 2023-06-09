import Cart from '@/components/Cart'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { BsHandbag } from 'react-icons/bs'
const MediaQuery = dynamic(() => import('react-responsive'), { ssr: false })

type Props = {
  hasAuthenticated: boolean
}

export default function Navbar({ hasAuthenticated }: Props) {
  const [offset, setOffset] = useState<number>(0)
  const [isOpenCart, setIsOpenCart] = useState<boolean>(false)

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset)
    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={[
        'fixed top-0 left-0 z-50 h-fit w-full duration-150 ease-in',
        offset > 0 && 'bg-white shadow-lg shadow-gray-200/50',
      ].join(' ')}
    >
      <MediaQuery minWidth={786}>
        <div className='absolute top-0 left-0 h-8 w-full bg-gray-900 flex items-center justify-center'>
          <p className='text-white/75 text-sm'>
            Sign up and{' '}
            <span className='text-white font-medium'>GET 27% OFF</span> for your
            first order.{' '}
            <Link
              className='text-white font-semibold underline-offset-1'
              href='/register'
            >
              Sign up now
            </Link>
          </p>
        </div>
        <div className='container flex items-center justify-between mt-8 h-20'>
          <Link href='/' className='text-slate-800 font-semibold text-lg'>
            <span>Fashionify</span>
          </Link>
          <nav>
            <ul className='flex gap-8 items-center text-slate-600'>
              <li>
                <Link className='hover:text-slate-950' href='/'>
                  New Arrival
                </Link>
              </li>
              <li>
                <Link className='hover:text-slate-950' href='/'>
                  Categories
                </Link>
              </li>
              <li>
                <Link className='hover:text-slate-950' href='/'>
                  Best Seller
                </Link>
              </li>
            </ul>
          </nav>
          <div>
            <button
              onClick={() => setIsOpenCart(!isOpenCart)}
              className={[
                'w-8 h-8 rounded-full flex items-center justify-center border',
                isOpenCart
                  ? 'bg-slate-800 border-slate-800 text-white'
                  : 'bg-gray-100 border-gray-200',
              ].join(' ')}
            >
              <BsHandbag />
            </button>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={786}>
        <div className='container flex items-center justify-between h-20'>
          <Link href='/' className='text-slate-800 font-semibold text-lg'>
            <span>Ease Market</span>
          </Link>
          <div className='flex gap-8 items-center'>
            <span className='text-xl'>
              <FiSearch />
            </span>
            {hasAuthenticated ? (
              <div className='flex gap-2 items-center'></div>
            ) : (
              <div className='flex gap-2 items-center'>
                <button className='px-12 h-10 rounded bg-gray-800 hover:bg-gray-950 text-white hover:shadow hover:shadow-slate-300 duration-75 ease-in'>
                  <Link href='/login'>Sign In</Link>
                </button>
              </div>
            )}
          </div>
        </div>
      </MediaQuery>

      {!!isOpenCart && <Cart />}
    </div>
  )
}
