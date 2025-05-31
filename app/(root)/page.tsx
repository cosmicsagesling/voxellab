import React from 'react'
import { DM_Sans } from 'next/font/google'
import Bot from '../components/landing_comp/spline'
import { CardSpotlightDemo } from '../components/landing_comp/cardSpot'

const dmSans = DM_Sans({
  subsets: ['latin'],
})

const page = () => {
  return (
    <main className="">
      <section className=' herobg flex flex-col gap-4 md:p-10 max-md:p-6 justify-between'>
        <div className='w-full'>
          <h1 data-aos="fade-up" className={`${dmSans.className}  text-3xl max-md:text-2xl text-slate-400`}>every hero <br /> needs a beginning <br /> <span className='text-5xl font-semibold text-blue-800 max-md:text-4xl'> this is yours.</span></h1>
        </div>
        <div className='w-full mx-auto flex items-center justify-center'>
        <Bot />

        </div>
      </section>

      <section className='py-24 px-10 max-md:px-6 max-md:py-8 bg-black text-white'>
        <div className=''>
          <span className='text-sm text-slate-300 mb-3'>WHAT WE DO !</span>
          <p className='text-slate-400 text-xl md:text-4xl'>
            Design & <br/>
            <span className='text-3xl font-semibold md:text-5xl text-white'>
            Development 
            </span>
          </p>

          
        </div>

        <div className='md:mt-15 max-md:mt-5'>
<CardSpotlightDemo/>

        </div>



      </section>
    </main>
  )
}

export default page
