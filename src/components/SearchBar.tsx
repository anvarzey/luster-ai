import { FaSearch } from 'react-icons/fa'
import { useState, ChangeEvent, SyntheticEvent, useEffect } from 'react'
import useTags from '@/hooks/useTags'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { CgClose } from 'react-icons/cg'

export default function SearchBar () {
  const [search, setSearch] = useState<string>('')
  const [suggestions, setSuggestions] = useState<string[]>([])
  const { tags } = useTags()
  const router = useRouter()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setSearch(value)
    if (value.length < 1) {
      setSuggestions([])
    } else if (tags) {
      setSuggestions(tags.filter(tag => tag.includes(value)))
    }
  }

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()
    if (search !== undefined && search.length > 2) {
      router.push(`/search/${search}`)
    }
  }

  const handleDeleteSearch = () => {
    setSearch('')
    setSuggestions([])
  }

  return (
    <div className='relative text-slate-800'>
      <form onSubmit={handleSubmit} className='w-full flex items-center p-2 rounded-lg border border-slate-600 bg-slate-700 gap-4 text-slate-100'>
        <button>
          <FaSearch />
        </button>
        <input onChange={handleChange} value={search} className='outline-none w-full bg-inherit' type="text" name="" id="" placeholder='Search AI images by topic...' />
        {
          search &&
          <button onClick={handleDeleteSearch}>
            <CgClose />
          </button>
        }
      </form>
      {
        suggestions.length > 0 &&
        <ul className='bg-white w-full py-2 rounded-lg absolute top-11 max-h-40 overflow-y-scroll'>
          {suggestions.map(sg => (
            <li key={sg}>
              <Link href={`/search/${sg}`} className='hover:bg-slate-200 cursor-pointer px-2 w-full block'>{sg}</Link>
            </li>
          ))}
        </ul>
      }
    </div>
  )
}