import { useEffect, useState } from 'react'

export default function useTags () {
  const [tags, setTags] = useState<string[]>([])

  useEffect(() => {
    (async function () {
      const data = await fetch('/api/tags').then(res => res.json())
      if (data) {
        setTags(data.tags)
      }
    }
    )()
  }, [])

  return { tags }
}