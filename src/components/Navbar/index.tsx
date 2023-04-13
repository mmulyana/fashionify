import Link from 'next/link'

type Props = {
  hasAuthenticated: boolean
}

export default function Navbar({ hasAuthenticated }: Props) {
  return (
    <div className='fixed top-0 left-0 z-50 bg-white h-32 w-full'>
      <div className='absolute top-0 left-0 h-12 w-full bg-gray-900 flex items-center justify-center'>
        <p className='text-white/75'>
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
      <div className='container flex items-center justify-between mt-12 h-20'>
        <Link href='/' className='text-gray-800 font-semibold text-lg'>
          <span>Ease Market</span>
        </Link>
        <nav>
          <ul className='flex gap-8 items-center text-gray-400'>
            <li>
              <Link className='hover:text-gray-900' href='/'>New Arrival</Link>
            </li>
            <li>
              <Link className='hover:text-gray-900' href='/'>Categories</Link>
            </li>
            <li>
              <Link className='hover:text-gray-900' href='/'>Best Seller</Link>
            </li>
          </ul>
        </nav>
        <div className='flex gap-3'>
          <div className='relative '>
            <form onSubmit={() => console.log('on development')}>
              <input
                type='text'
                placeholder='Search'
                className='w-full px-3 bg-gray-100 border border-gray-200 rounded overflow-hidden h-10 outline-none'
              />
              <input type='submit' hidden />
            </form>
          </div>
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
    </div>
  )
}
