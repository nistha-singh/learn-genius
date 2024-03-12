import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Scheduled = ({image,title,description,links}) => {
  return (
    <div className="rounded-lg shadow-md ">
        <img className="w-full h-48 object-cover rounded-lg" src={image} alt={title} />

        <div className="px-6 py-4">
            <h2 className="font-bold text-xl mb-2 text-dark-blue">{title}</h2>
            <p className="text-gray-700">{description}</p>
            <div className='flex justify-center mt-2 mb-0'><span className='text-sm'>starts @ <p className='inline-block text-red-700 font-bold'>6:00pm 11/03/24</p></span></div>
            {/* <div className="flex flex-row min-w-fit justify-center gap-4 bg-darkish-green border-2 border-white m-2 p-1 rounded-md items-center hover:bg-gradient-to-tl from-greenish to-darkish-green"> */}
            <div className="flex min-w-fit justify-center bg-darkish-green border-[1.5px] border-white m-2 p-1 rounded-md items-center hover:bg-gradient-to-tl from-[#84bab4] to-darkish-green">
              <Link href={links} className="text-l text-light-green font-semibold">Sign Up</Link>
              {/* <Link href={links}><Image src="/rarrow.png" width="20" height="10"></Image></Link> */}
            </div>
        </div>  
    </div>
  )
}

export default Scheduled