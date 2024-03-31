import React from 'react'
import "@/public/bg.png"
import '@/public/google.png'
import '@/public/github.png'
import '@/public/ms.png'
import '@/public/fb.png'
import Image from "next/image"
import Link from "next/link"


const Login = () => {
  return (
    <main className='flex justify-center bg-light-green min-h-screen'>
        <div className='shrink flex flex-col sm:flex-row just bg-white w-3/4 m-8 min-w-fit shadow-xl gap-4 sm:gap-0'>
            {/* login side */}
            <div className='flex-auto grow flex flex-col justify-center items-center w-full sm:w-2/3'>
                <h1 className='text-7xl font-bold pt-8'>Login</h1>
                <p className='m-4'>Let's gamify learning!</p>
                <form className='flex flex-col justify-center items-center'>
                    <label for='username'></label>
                    <input type='text' id='username' name='username' className='w-40 sm:w-64 h-12 border border-gray-300 rounded-2xl px-4 mt-4' placeholder='Username' required/>

                    <label for='password'></label>
                    <input type='password' id='password' name='password' className='w-40 sm:w-64 h-12 border border-gray-300 rounded-2xl px-4 m-4' placeholder='Password' required></input>

                    <label for='remember' className='text-sm'>
                        <input type="checkbox" id="remember" name="remember" /> Remember me
                    </label>
                    
                    <button type='submit' className='m-6 py-2 px-12 bg-[#38B398] rounded-xl text-sm font-semibold border text-white'>Login</button>

                    <div className='shrink border-t border-t-gray-600'>
                        <p className='text-xs text-center text-gray-600'>Or Sign Up using</p>
                        <div className='flex flex-row justify-between w-64 h-10 pt-3 px-4'>
                            <Image src='/google.png' width={30} height={10} className='shrink'></Image>
                            <Image src='/github.png' width={30} height={10} className='shrink'></Image>
                            <Image src='/ms.png' width={30} height={10} className='shrink'></Image>
                            <Image src='/fb.png' width={30} height={10} className='shrink'></Image>
                        </div>
                    </div>

                </form>
            </div>
            {/* image side  */}
            <div className="grow flex flex-col justify-center items-center bg-[url('/bg.png')] bg-cover bg-no-repeat h-1/2 sm:min-h-full w-full sm:w-1/3">
               <p className='text-4xl font-semibold text-white'>New here?</p>
               <p className='w-3/4 text-center text-white pt-2'>Sign up and discover great oppurtunities!</p>
               <Link href='/signup'><button className='m-6 py-2 px-12 bg-white rounded-xl text-sm font-semibold border'>Sign Up</button></Link>
            </div>
        </div>      
    </main>
  )
}

export default Login