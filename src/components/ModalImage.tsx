import Image from 'next/image'
import React, { useEffect } from 'react'
import { CgClose } from 'react-icons/cg'
import { useState } from 'react'

export default function ModalImage ({ handleClose, img }: { handleClose: Function, img: string }) {
  const [downloadURL, setDownloadURL] = useState('')
  useEffect(() => {
    (
      async function () {
        const image = await fetch(img)
        const imageBlog = await image.blob()
        setDownloadURL(URL.createObjectURL(imageBlog))
      }
    )()
  }, [img])

  return (
    <div className='z-10 absolute fixed bg-black/80 w-full h-full inset-0'>
      <div className='flex justify-end'>
        <button className='text-white p-10 text-2xl' onClick={() => handleClose()}>
          <CgClose />
        </button>
      </div>
      <div className='flex justify-center h-96 w-auto'>
        <Image src={img} alt='image' width={400} height={400} />
      </div>
      <div className='flex justify-center mt-10'>
        <a href={downloadURL} download className='py-2 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-slate-100 hover:text-slate-50'>Download</a>
      </div>
    </div>
  )
}
