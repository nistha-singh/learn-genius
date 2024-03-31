import React from 'react'
import Link from "next/link"
import Image from "next/image"
import "@/public/pp.png"
import {Squada_One} from "next/font/google"
import {Bebas_Neue} from "next/font/google"
import "@/public/bbg.png"

const squada = Squada_One({ subsets: ["latin"],weight: '400',});
const bebas = Bebas_Neue({ subsets: ["latin"],weight: '400',});

const Users = ({params}) => {
  return (
    // <div>user id={params.userID}</div>
    <div className='flex flex-row bg-[#ebfceb] min-h-screen'>
      {/* left side part */}
      <div className='flex flex-col bg-white w-1/4 h-full m-4'>
        <div className='flex flex-row m-6 '>
          <Image src='/pp.png' width={100} height={50} className='rounded-full'></Image>
          <div className='grow flex flex-col justify-center items-center'>
            <h1 className='font-bold text-gray-700 text-xl'>Nistha Singh</h1>
            <h2 className='text-gray-500 text-sm'>nistha25</h2>
            <p className='mt-2'>Rank: <span className='font-semibold'>2569</span></p>
          </div>
        </div>
        <Link href='/' className='flex justify-center items-center m-4'><button className='bg-[#FCFBF4] py-2 px-8 border-2 border-[#ebfceb] rounded-lg hover:shadow-lg font-semibold text-gray-700'>Edit your profile</button></Link>
      </div>
      {/* right side */}
      <div className='my-4 mr-4 bg-white w-3/4 h-full'>
        hi
      </div>
    </div>
  )
}

export default Users