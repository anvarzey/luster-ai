import Link from 'next/link'
import { ReactElement } from 'react'

export default function Header (): ReactElement {
  return (
    <header className='border-b border-slate-800'>
      <div className='flex gap-4 py-3 px-10 items-center justify-between mx-auto md:w-4/5 md:px-0'>
        <Link href='/' className='text-2xl font-mono text-emerald-400'>
          Luster AI
        </Link>
        <div className='flex gap-8'>
          <Link className='px-4 py-2 rounded-2xl text-slate-200 border border-slate-200 hover:bg-slate-500' href='/search'>Search</Link>
          <Link className='px-4 py-2 rounded-2xl text-emerald-400 border border-emerald-400 hover:bg-emerald-600 hover:text-slate-100' href='/upload'>Upload</Link>
        </div>
      </div>
    </header>
  )
}
