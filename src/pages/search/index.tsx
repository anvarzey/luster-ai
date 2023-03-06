import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import { useEffect, useState } from "react";
import useTags from '@/hooks/useTags'

export default function Search () {
  // const { tags } = useTags()
  // const [limit, setLimit] = useState(15)

  return (
    <div className='bg-slate-900 min-h-screen flex flex-col'>
      <Header />
      <main className='flex-grow flex flex-col items-center pt-12'>
        <h1 className="text-3xl text-slate-50">Search by topic</h1>
        <div className="w-3/4 lg:w-2/4 mt-16">
          <SearchBar />
        </div>
        {/* <div className="text-slate-50 mt-24 ">
          <h3 className="text-center">Topics</h3>
          <ul className="flex flex-wrap gap-2 justify-center w-3/5 mx-auto">
            {
              tags.map(tag => (
                <li key={tag} className='px-4 py-2 border border-slate-100 bg-slate-700 rounded-xl'>
                  {tag}
                </li>
              ))
            }
            <li></li>
          </ul>
          <button className="underline">Load more topics</button>
        </div> */}
      </main>
      <Footer />
    </div>
  )
}

