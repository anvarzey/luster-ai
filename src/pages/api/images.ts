import type { NextApiRequest, NextApiResponse } from 'next'
import { v2 as cloudinary } from 'cloudinary'


cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { tag } = JSON.parse(req.body)
  const result = await cloudinary.api.resources_by_tag(tag, {
    folder: 'my-public-folder'
  })
  res.status(200).json(result)
}