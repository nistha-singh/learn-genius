import React from 'react'
import "../public/logo.png"
import Image from "next/image"
import Link from "next/link"
import { Russo_One } from 'next/font/google'
const russo = Russo_One({ subsets: ["latin"],weight: '400',});

const Navbar = () => {
  return (
    <>
    <div className="flex justify-between w-auto h-16 bg-gradient-to-r from-light-green to-greenish">
        <Image src="/logo.png" width="250" height="50" className="p-2 pl-4"/>
        <div className="flex items-center p-4 pr-8 gap-4">
            <Link href="/" className={russo.className}><p className="text-darkish-green no-underline hover:underline">Home</p></Link>
            <Link href="/aboutus" className={russo.className}><p className="text-darkish-green no-underline hover:underline">About Us</p></Link>
            <Link href="/contactus" className={russo.className}><p className="text-darkish-green no-underline hover:underline">Contact Us</p></Link>
            <Link href="/discover" className={russo.className}><p className="text-darkish-green no-underline hover:underline">Discover</p></Link>
            <Link href="/login" className={russo.className}><p className="p-1 rounded-md text-greenish bg-navy-blue no-underline hover:underline">Login</p></Link>
        </div>
    </div>
    </>
  )
}

export default Navbar