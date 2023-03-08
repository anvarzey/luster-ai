import Dropzone from '@/components/Dropzone'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Loader from '@/components/Loader'
import useUpload from '@/hooks/useUpload'
import Image from 'next/image'
import Link from 'next/link'
import { ReactElement, useState } from 'react'

export default function Upload (): ReactElement {
  const { data, loading, handleUpload, handleReset } = useUpload()
  const [imgStr, setImgStr] = useState(undefined)

  const uploadImg = async (): Promise<void> => {
    if (imgStr !== undefined) {
      await handleUpload(imgStr)
    }
  }

  const resetAll = (): void => {
    handleReset()
    setImgStr(undefined)
  }

  return (
    <div className='bg-slate-900 min-h-screen flex flex-col'>
      <Header />
      <main className='flex-grow flex flex-col items-center w-4/5 mx-auto text-center'>
        <h1 className='text-3xl mt-12 mb-4 text-slate-50'>Upload</h1>
        <div className='w-full'>
          {
            loading
              ? (
                <div className='flex items-center justify-center h-full'>
                  <Loader />
                </div>)
              : data !== undefined
                ? (
                  <div className='flex justify-between'>
                    <div className='flex flex-col items-center gap-6'>
                      <h2 className='text-slate-50 text-xl'>
                        Your image has been uploaded successfully !
                      </h2>
                      <div key={data.asset_id}>
                        <Image src={data.secure_url} alt={data.asset_id} width={200} height={200} />
                      </div>
                      <div className='flex items-center justify-center gap-6 w-full'>
                        <Link className='px-4 py-2 rounded-lg border border-slate-600 bg-slate-700 text-slate-200 hover:text-slate-50 hover:border-slate-100' href='/'>Go back to home</Link>
                        <button className='px-4 py-2 rounded-lg border border-emerald-600 bg-emerald-700 text-slate-200 hover:text-slate-50 hover:border-emerald-300' onClick={() => resetAll()}>Upload another image</button>
                      </div>
                    </div>
                    <div className='flex flex-col justify-around items-center w-2/5 gap-6'>
                      <h2 className='text-slate-100 text-xl'>Tags generated:</h2>
                      <ul className='flex flex-wrap justify-center gap-2'>
                        {
                          data.tags?.map(tag => (
                            <li className='px-4 py-2 border border-slate-100 text-slate-100 bg-slate-700 rounded-xl' key={tag}>{tag}</li>
                          ))
                        }
                      </ul>
                    </div>
                  </div>)
                : (
                  <div>
                    <p className='text-slate-50 text-lg'>Feel free to contribute with your AI images.</p>
                    <p className='text-slate-50 text-lg mb-12'> We use a AI to generate the tags for the each image to be easily found later.</p>
                    <Dropzone setImgStr={setImgStr} uploadImg={uploadImg} />
                  </div>)
          }
        </div>
      </main>
      <Footer />
    </div>
  )
}
