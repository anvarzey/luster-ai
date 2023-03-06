import { useState } from "react"

export default function useUpload () {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [data, setData] = useState(undefined)

  const handleUpload = async (imgStr) => {
    setLoading(true)
    try {
      const respData = await fetch('/api/upload', {
        method: 'POST',
        body: JSON.stringify({
          image: imgStr
        })
      })
        .then(res => res.json())
      setData(respData)
    } catch (err) {
      setError(err.message)
    }
    setLoading(false)
  }

  const handleReset = () => {
    setLoading(false)
    setError(false)
    setData(undefined)
  }

  return { data, error, handleReset, handleUpload, loading }
}
