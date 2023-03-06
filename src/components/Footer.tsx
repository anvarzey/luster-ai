import Link from 'next/link';
import React from 'react';

export default function Footer () {
  return (
    <footer className='flex items-center justify-center border-t border-slate-800 py-4'>
      <div className='text-emerald-700'>
        Powered by <Link href='https://cloudinary.com' target='_blank'>Cloudinary</Link>
      </div>
    </footer>
  )
}
