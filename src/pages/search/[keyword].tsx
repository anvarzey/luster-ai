import { useRouter } from 'next/router'
import { ReactElement } from 'react'
import Header from '@/components/Header'
import useImages from '@/hooks/useImages'
import ImagesContainer from '@/components/ImagesContainer'
import Loader from '@/components/Loader'
import SearchBar from '@/components/SearchBar'
import Footer from '@/components/Footer'

export default function Search (): ReactElement {
  const router = useRouter()
  const { keyword } = router.query
  const { loading, result } = useImages({ keyword })

  return (
    <div className='bg-slate-900 min-h-screen flex flex-col'>
      <Header />
      <main className='pb-20 pt-12 px-4 flex-grow flex flex-col items-center'>
        <h1 className='text-3xl text-slate-50'>Search by topic</h1>
        <div className='w-3/4 lg:w-2/4 mt-16'>
          <SearchBar />
        </div>
        <h2 className='text-4xl text-slate-50 text-center mt-12 mb-20'>Results</h2>
        {
          loading
            ? <Loader />
            : result.length >= 1
              ? <ImagesContainer images={result} />
              : (
                <div className='text-center text-white italic text-xl'>No results have been found</div>)
        }
      </main>
      <Footer />
    </div>
  )
}
