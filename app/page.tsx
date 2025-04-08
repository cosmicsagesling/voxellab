import React from 'react'
import { DM_Sans } from 'next/font/google'
import Bot from './components/spline'

const dmSans = DM_Sans({
  subsets: ['latin'],
})

const page = () => {
  return (
    <main className="">
      <section className='flex flex-col gap-4 md:p-10 max-md:p-6 justify-between'>
        <div className='w-full'>
          <h1 className={`${dmSans.className} text-3xl max-md:text-2xl text-slate-400`}>every hero <br /> needs a beginning <br /> <span className='text-5xl font-semibold text-black max-md:text-4xl'> this is yours.</span></h1>
        </div>
        <div className='w-full mx-auto flex items-center justify-center'>
        <Bot />

        </div>
      </section>

      <section className='py-24 px-10 max-md:px-6 max-md:py-8 bg-black text-white'>
        <div className=''>
          <p className='text-slate-400 text-xl md:text-4xl'>
            Design & <br/>
            <span className='text-3xl font-semibold md:text-5xl'>
            Development 
            </span>
          </p>

          
        </div>




      </section>
    </main>
  )
}

export default page
