import { useEffect, useState } from 'react'

interface Response {
  tags: string[]
}

interface FetchResponse {
  tags: string[] | []
}

export default function useTags (): Response {
  const [tags, setTags] = useState<string[]>([])

  useEffect(() => {
    void (async function () {
      const data: FetchResponse = await fetch('/api/tags').then(async (res) => await res.json())
      if (data.tags.length >= 1) {
        setTags(data.tags)
      }
    }
    )()
  }, [])

  return { tags }
}
