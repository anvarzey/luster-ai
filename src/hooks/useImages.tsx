import { useEffect, useState } from 'react'

export default function useImages ({ keyword }: { keyword: string | string[] | undefined }) {
  const [result, setResult] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(undefined)

  useEffect(() => {
    setLoading(true)
    if (keyword !== undefined) {
      (async function () {
        const data = await fetch('/api/images', {
          method: 'POST',
          body: JSON.stringify({ tag: keyword })
        }).then(res => res.json())
        setResult(data.resources)
      }
      )()
      setLoading(false)
    }
  }, [keyword])

  return { loading, result, error }
}
