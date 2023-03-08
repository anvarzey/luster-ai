import { useState } from 'react'
import { SearchData } from '@/types/types'

interface UploadData extends SearchData {
  tags: string[]
}

interface Response {
  data: UploadData | undefined
  error: boolean
  handleReset: Function
  handleUpload: Function
  loading: boolean
}

export default function useUpload (): Response {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [data, setData] = useState<UploadData | undefined>(undefined)

  const handleUpload = async (imgStr: string): Promise<void> => {
    setLoading(true)
    try {
      const respData = await fetch('/api/upload', {
        method: 'POST',
        body: JSON.stringify({
          image: imgStr
        })
      })
        .then(async (res) => await res.json())
      setData(respData)
    } catch (err: any) {
      setError(err.message)
    }
    setLoading(false)
  }

  const handleReset = (): void => {
    setLoading(false)
    setError(false)
    setData(undefined)
  }

  return { data, error, handleReset, handleUpload, loading }
}
