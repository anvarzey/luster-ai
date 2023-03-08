import { useEffect, useState } from 'react'
import { SearchResponse } from '@/types/types'

interface HookReturn {
  result: SearchResponse
  loading: boolean
  error: undefined
}

export default function useImages ({ keyword }: { keyword: string | string[] | undefined }): HookReturn {
  const [result, setResult] = useState<SearchResponse>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(undefined)

  useEffect(() => {
    setLoading(true)
    if (keyword !== undefined) {
      void (async function () {
        const data = await fetch('/api/images', {
          method: 'POST',
          body: JSON.stringify({ tag: keyword })
        })
          .then(async (res) => await res.json())
          .catch(err => setError(err))
        setResult(data.resources)
      }
      )()
      setLoading(false)
    }
  }, [keyword])

  return { loading, result, error }
}
