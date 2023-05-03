// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query
  const { data } = await axios(`${process.env.NEXT_PUBLIC_API}/products/${id}`)
  res.status(200).json({ data })
}
