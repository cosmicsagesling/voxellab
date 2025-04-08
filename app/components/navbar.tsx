import React from 'react'
import { Geist } from 'next/font/google'
import { Menu } from 'lucide-react'
import Link from 'next/link'

const geist = Geist({
    subsets: ["latin"],
})

const Navbar = () => {
    return (
        <header className={`${geist.className} flex items-center p-4 w-full`}>
            <nav className='w-full flex items-center justify-between'>
                <div>
                    <p className='font-semibold text-5xl max-md:text-4xl'>VA.</p>
                </div>
                <ul className=" max-md:hidden flex space-x-4 px-4 rounded-2xl py-3 bg-black text-white items-center justify-between">
                    <li><Link href="/" className="hover:text-gray-400 px-3">Home</Link></li>
                    <li><Link href="/about" className="hover:text-gray-400 px-2">About</Link></li>
                    <button className='px-4 py-2 bg-white rounded-md text-black'>Join Us</button>
                </ul>
                <div className='md:hidden'>
                    <Menu />
                </div>
            </nav>

        </header>
    )
}

export default Navbar
