import { useDropzone } from 'react-dropzone'
import { ReactElement, useState } from 'react'
import Image from 'next/image'

export default function Dropzone ({ setImgStr, uploadImg }: { setImgStr: Function, uploadImg: Function }): ReactElement {
  const [imgPrev, setImgPrev] = useState<string | undefined>(undefined)
  const { getRootProps, getInputProps, open } = useDropzone({
    accept: {
      'image/*': []
    },
    maxFiles: 1,
    noClick: true,
    noKeyboard: true,
    onDrop: acceptedFiles => {
      const reader = new FileReader()
      reader.readAsDataURL(acceptedFiles[0])
      reader.onload = function (onLoadEvent) {
        if (onLoadEvent.target?.result !== undefined) {
          setImgStr(onLoadEvent.target.result)
          setImgPrev(URL.createObjectURL(acceptedFiles[0]))
        }
      }
    }
  })

  return (
    <>
      {
        imgPrev === undefined
          ? (
            <section className='rounded-lg flex items-center justify-center py-16 shadow-lg shadow-emerald-600/50 bg-slate-700 border border-emerald-600 md:w-2/5 mx-auto'>
              <div className='flex flex-col items-center gap-4' {...getRootProps()}>
                <input {...getInputProps()} />
                <p className='text-xl text-slate-100'>Drag &apos;n drop here or</p>
                <button className='py-2 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-slate-100 hover:text-slate-50' onClick={open}>Select file</button>
              </div>
            </section>)
          : (
            <div className='flex flex-col items-center gap-8'>
              <div>
                <Image src={imgPrev} alt='Image to upload' width={200} height={200} />
              </div>
              <div className='flex items-center justify-center gap-6'>
                <button className='px-4 py-2 rounded-lg border border-slate-600 bg-slate-700 text-slate-200 hover:text-slate-50 hover:border-slate-100' onClick={() => setImgPrev(undefined)}>Choose another image</button>
                <button onClick={() => uploadImg()} className='px-4 py-2 rounded-lg border border-emerald-600 bg-emerald-700 text-slate-200 hover:text-slate-50 hover:border-emerald-300'>Upload</button>
              </div>
            </div>)
      }
    </>
  )
}
