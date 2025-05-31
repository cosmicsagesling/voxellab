import React from "react";
import { Geist } from "next/font/google";
import { Menu } from "lucide-react";
import Link from "next/link";

const geist = Geist({
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <header
      className={`${geist.className}sticky top-2 bg-transparent p-4 flex items-center w-full`}
    >
      <nav className="w-full flex items-center justify-between">
        <div data-aos="fade-down">
          <img src="/Logos/TextLogoDark.svg" alt="logo" className="w-6 h-16" />
        </div>
        <ul
          data-aos="fade-down"
          className=" max-md:hidden flex space-x-4 px-4 rounded-full py-4 bg-black text-white items-center justify-between"
        >
          <li>
            <Link href="/" className="hover:text-gray-400 px-3">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-400 px-2">
              About
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-400 px-2">
              Courses
            </Link>
          </li>

          <li>
            <Link href="/about" className="hover:text-gray-400 px-2">
              Testimonials
            </Link>
          </li>
        </ul>

        <a href="/login" data-aos="fade-down" className="relative max-md:hidden px-4 py-2 ring-1 bg-gradient-to-br from-blue-400 to-blue-600 text-white ring-blue-300 rounded-full text-black ">
          Sign Up
          <div className="absolute w-3 h-3 bg-red-500 rounded-full animate-pulse top-0 right-0"></div>
        </a>

        <div className="md:hidden">
          <Menu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
