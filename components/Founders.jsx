import React from 'react'
import Image from "next/image"
import "../public/hp.png"
import {Squada_One} from "next/font/google"
import Link from "next/link"
import "../public/rarrow.png"
import FounderCards from './foundercards'
import "@/public/pp.png"

const squada = Squada_One({ subsets: ["latin"],weight: '400',});

const founders = [
    {
      name: 'John Doe',
      title: 'Founder',
      description: 'Im fascinated by the environmental implications of EVM 7. Join the discussion on sustainable blockchain solutions and their impact on the planet.',
      image: '/pp.png',
    },
    {
        name: 'John Doe',
        title: 'Treasurer',
        description: 'Lets unravel the mysteries of smart contracts and their potential in EVM 6. Your insights could pave the way for groundbreaking innovations.',
        image: '/pp.png',
    },
    {
        name: 'John Doe',
        title: 'Founder',
        description: 'Im fascinated by the environmental implications of EVM 7. Join the discussion on sustainable blockchain solutions and their impact on the planet.',
        image: '/pp.png',
    },
    {
        name: 'John Doe',
        title: 'Investor',
        description: 'Lets unravel the mysteries of smart contracts and their potential in EVM 6. Your insights could pave the way for groundbreaking innovations.',
        image: '/pp.png',
    },
    {
        name: 'John Doe',
        title: 'Investor',
        description: 'Lets unravel the mysteries of smart contracts and their potential in EVM 6. Your insights could pave the way for groundbreaking innovations.',
        image: '/pp.png',
    },
    {
        name: 'John Doe',
        title: 'Founder',
        description: 'Lets unravel the mysteries of smart contracts and their potential in EVM 6. Your insights could pave the way for groundbreaking innovations.',
        image: '/pp.png',
    },
  ];

  const chunkedFounders = founders.reduce((acc, curr, index) => {
    const chunkIndex = Math.floor(index / 3);
    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }
    acc[chunkIndex].push(curr);
    return acc;
  }, []);

const Founders = () => {
  return (
    <div className='bg-light-green min-w-full min-h-fit p-4'>
        <div className={squada.className}>
            <span className="text-6xl text-left text-[#336678]">From our <p className='text-dark-blue inline-block'>Founders</p></span>
        </div>
        <div className='grid grid-flow-col grid-cols-3 justify-between gap-16 justify-items-center m-4 p-4'>
          {chunkedFounders.map((chunk, index) => (
          <div key={index} className='flex justify-center'>
            {chunk.map((cardData, idx) => (
              <FounderCards key={idx} {...cardData} />
            ))}
          </div>
          ))}
        </div>
    </div>
  )
}

export default Founders