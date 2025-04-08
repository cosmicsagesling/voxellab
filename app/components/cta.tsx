import React from 'react'
import { ArrowUpRight } from 'lucide-react'


const Cta = () => {
  return (
    <a className='fixed bottom-5 ring-1 ring-slate-200 gap-3 right-10 flex items-center px-8 py-1.5 text-2xl bg-white text-black'>
      Join us 
      <ArrowUpRight/>
    </a>
  )
}

export default Cta
