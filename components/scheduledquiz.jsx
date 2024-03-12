import Image from "next/image"
import "../public/hp.png"
import {Squada_One} from "next/font/google"
import Link from "next/link"
import "../public/rarrow.png"
import Carousel from "@/components/carousel"
import Card from "@/components/card"
import Scheduled from "@/components/schedulecard"
import Live from "@/components/livequiz"

const squada = Squada_One({ subsets: ["latin"],weight: '400',});

const cardData = [
  {
    title: 'Card Title 1',
    description: 'Description for the first card.',
    image: 'https://picsum.photos/id/1005/400/300',
    links:'https://www.quiz-maker.com/', // Replace with your image URL (optional)
  },
  {
    title: 'General Knowledge',
    description: 'How much do you know about the world?',
    image: 'https://picsum.photos/id/1006/400/300',
    links:'https://www.quiz-maker.com/', // Replace with your image URL (optional)
  },
  {
    title: 'Card Title 3',
    description: 'Description for the third card.',
    image: 'https://picsum.photos/id/1008/400/300',
    links:'https://www.quiz-maker.com/', // Replace with your image URL (optional)
  },
  {
    title: 'Card Title 4',
    description: 'Description for the fourth card.',
    image: 'https://picsum.photos/id/1009/400/300', 
    links:'https://www.quiz-maker.com/', // Replace with your image URL (optional)
  },
];

import React from 'react'

const ScheduledQuiz = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-b from-light-green to-greenish min-w-full">
        <div className={squada.className}>
        <p className="text-3xl text-dark-blue font-extrabold pt-4">
        Scheduled quizzes!!!
        </p></div>
        {/* <Carousel items={yourCardsArray} className="border-red-600"></Carousel> */}
        <div className="grid grid-flow-col grid-cols-4 justify-between gap-16 justify-items-center m-4 p-4">
        {cardData.map((cardData, index) => (
          <Scheduled key={index} {...cardData}/>
        ))}
        </div>
        <div className="flex flex-row justify-between gap-4 bg-dark-blue mb-4 p-2 rounded-sm">
          <Link href="/quizzes" className="text-md text-light-green font-semibold">Show more</Link>
          <Link href="/quizzes"><Image src="/rarrow.png" width="25" height="10"></Image></Link>
        </div>
      </div>
      
  )
}

export default ScheduledQuiz