"use client"
import Image from "next/image"
import "../public/hp.png"
import {Squada_One} from "next/font/google"
import Link from "next/link"
import "../public/rarrow.png"
import Carousel from "@/components/carousel"
import Card from "@/components/card"
import Scheduled from "@/components/schedulecard"
import Live from "@/components/livequiz"
import ScheduledQuiz from "@/components/scheduledquiz"
import Founders from "@/components/Founders"

const squada = Squada_One({ subsets: ["latin"],weight: '400',});


export default function Home() {
  return (
    <main className="flex flex-col min-w-screen min-h-screen items-center justify-start flex-wrap">
      <div className="flex flex-row min-w-screen justify-between bg-greenish  min-w-full">
        <div className="grow flex-1 flex flex-col justify-center items-center flex-wrap bg-greenish">
          <div className={squada.className}>
            <p className="text-5xl sm:text-8xl p-8 text-center text-[#336678]">Invest in your knowledge</p>
          </div>
          <div className="grid grid-cols-1 justify-center items-center sm:grid-cols-2 sm:gap-8">
            <p className="text-2xl text-navy-blue font-semibold text-center">Learn concepts.</p>
            <p className="text-2xl text-dark-blue font-semibold text-center">Test yourself.</p>
          </div>
          <p className="text-2xl text-dark-blue font-extrabold pt-4 text-center">Get rewards!</p>
          <div className="flex flex-row justify-between items-center gap-4 bg-dark-blue m-8 p-2 rounded-sm">
            <Link href="/login" className="text-xl text-light-green font-semibold">Get started</Link>
            <Link href="/login"><Image src="/rarrow.png" width="25" height="10"></Image></Link>
          </div>
        </div>
        <div className="hidden sm:block relative">
            <div className="w-full h-full">
              <Image src="/hp.png" width={450} height={50}/>
            </div>
          <div className="absolute inset-0 bg-gradient-to-r from-greenish via-transparent to-transparent" />
        </div>
      </div>
      <Live></Live>
      <div className="flex justify-center w-full items-center bg-gradient-to-br from-greenish  via-darkish-green to-greenish  p-2 text-white text-2xl sm:text-5xl">
        <p className={squada.className}>200000+ participants</p>
      </div>
      <ScheduledQuiz></ScheduledQuiz>
      <div className="flex justify-center w-full items-center bg-gradient-to-br from-greenish via-darkish-green to-greenish p-2 text-white text-2xl sm:text-5xl">
        <p className={squada.className}>INR 100000+ prizes</p>
      </div>
      <Founders></Founders>
    </main>
  );
}
