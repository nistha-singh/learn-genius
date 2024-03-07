import React from 'react'
import "../public/logo.png"
import Image from "next/image"
const Navbar = () => {
  return (
    <>
    <div className="flex justify-between w-full h-16 bg-green-100">
        <Image src="/logo.png" width="200" height="50" className="p-4"/>
        <div className="flex p-4 pr-8 gap-4">
            <span>Home</span>
            <span>About Us</span>
            <span>Contact Us</span>
            <span>Discover</span>
            <span>Login</span>
        </div>
    </div>
    </>
  )
}

export default Navbar