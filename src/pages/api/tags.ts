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
  const result = await cloudinary.api.tags({ max_results: 100 })
  res.status(200).json(result)
}

// export const config = {
//   api: {
//     bodyParser: {
//       sizeLimit: '4mb'
//     }
//   }
// }