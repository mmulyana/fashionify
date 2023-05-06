import Head from 'next/head'
import { ReactNode } from 'react'
import Navbar from '../Navbar'

type Props = {
  children: ReactNode
  meta: {
    title?: string
    description?: string
  }
}

export default function BaseLayout({ children, meta }: Props) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name='description' content={meta.description} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar hasAuthenticated={false} />
      <main className='mt-28'>{children}</main>
    </>
  )
}
