// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { v2 as cloudinary } from 'cloudinary'


cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { image } = JSON.parse(req.body)
  const result = await cloudinary.uploader.upload(image, {
    folder: 'my-public-folder',
    transformation: [
      {if: 'width > 1000'},
      {
        width: 1000,
        crop: 'scale'
      },
      {if: 'end'}
    ],
    categorization: 'google_tagging',
    auto_tagging: 0.6
  })
  res.status(200).json(result)
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '4mb'
    }
  }
}