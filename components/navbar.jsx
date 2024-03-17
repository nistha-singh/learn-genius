import React from 'react'
import "../public/logo.png"
import Image from "next/image"
import Link from "next/link"
import { Russo_One } from 'next/font/google'
// import { Russo_One } from 'next/font/google'
const russo = Russo_One({ subsets: ["latin"],weight: '400',});

const Navbar = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between min-w-screen sm:min-w-screen bg-gradient-to-r from-light-green to-greenish min-w-0">
        <Image src="/logo.png" width="250" height="50" className="p-1 sm:p-2 sm:pl-4"/>
        <div className="flex items-center sm:p-4 pr-8 gap-4 min-w-0">
            <Link href="/"><p className="text-[#336678] text-xs sm:text-base font-semibold no-underline hover:underline">Home</p></Link>
            <Link href="/aboutus"><p className="text-[#336678] text-xs sm:text-base font-semibold no-underline hover:underline">About</p></Link>
            <Link href="/contactus"><p className="text-[#336678] text-xs sm:text-base font-semibold no-underline hover:underline">Contact</p></Link>
            <Link href="/discover"><p className="text-[#336678] text-xs sm:text-base font-semibold no-underline hover:underline">Discover</p></Link>
            <Link href="/login"><p className="p-1 rounded-md text-xs sm:text-base text-greenish font-semibold bg-navy-blue no-underline hover:underline">Login</p></Link>
        </div>
    </div>
  )
}

export default Navbar