import Image from 'next/image'
import { ReactElement, useState } from 'react'
import ModalImage from './ModalImage'
import { SearchResponse } from '@/types/types'

export default function ImagesContainer ({ images }: { images: SearchResponse }): ReactElement {
  const [imgToView, setImgToView] = useState<string | undefined>(undefined)

  const handleOpen = (img: string): void => {
    setImgToView(img)
  }

  const handleClose = (): void => {
    setImgToView(undefined)
  }

  return (
    <>
      <ul className='grid auto-cols-fr grid-flow-col gap-8 place-items-center'>
        {
          images.map(image => (
            <li key={image.asset_id} className='h-72 rounded-lg overflow-hidden shadow-lg shadow-emerald-800/40 ease-in duration-200 hover:scale-105'>
              <button onClick={() => handleOpen(image.secure_url)} className='cursor-pointer'>
                <Image className='rounded-lg' src={image.secure_url} alt='image' width={300} height={300} />
              </button>
            </li>
          ))
        }
      </ul>
      {
        imgToView !== undefined && <ModalImage img={imgToView} handleClose={handleClose} />
      }
    </>
  )
}
