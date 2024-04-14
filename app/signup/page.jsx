'use client'
import React from 'react'
import { useState } from 'react';
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import {auth} from '@/app/firebase/config'
import "@/public/bg.png"
import '@/public/google.png'
import '@/public/github.png'
import '@/public/ms.png'
import '@/public/fb.png'
import Image from "next/image"
import Link from "next/link"


const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
  
    const handleSignUp = async () => {
      try {
          const res = await createUserWithEmailAndPassword(email, password)
          console.log({res})
          sessionStorage.setItem('user', true)
          setEmail('');
          setPassword('')
  
      } catch(e){
          console.error(e)
      }
    };
    return (
        <main className='flex justify-center bg-light-green min-h-screen'>
            <div className='shrink flex sm:flex-row just bg-white w-3/4 m-2 sm:m-8 min-w-fit shadow-xl gap-0'>
                <div className="bg-[url('/bg.png')] bg-cover bg-no-repeat w-1/6 hidden sm:block"></div>
                {/* login side */}
                <div className='flex-auto grow flex flex-col sm:justify-center items-center w-full sm:w-4/6'>
                    <h1 className='text-5xl sm:text-7xl font-bold mt-2 sm:mt-8'>Sign Up</h1>
                    <p className='m-4'>Let's gamify learning!</p>
                    <form className='flex flex-col justify-center items-center'>
                        {/* <label for='name'></label>
                        <input type='text' id='name' name='name' className='w-40 sm:w-64 h-10 border border-gray-300 rounded-2xl px-4 mt-4' placeholder='Full name' required/> */}

                        <label for='email'></label>
                        <input type='email' id='username' name='email' value={email} onChange={(e) => setEmail(e.target.value)}  className='w-40 sm:w-64 h-10 border border-gray-300 rounded-2xl px-4 mt-4' placeholder='Email' required/>

                        <label for='password'></label>
                        <input type='password' id='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} className='w-40 sm:w-64 h-10 border border-gray-300 rounded-2xl px-4 mt-4' placeholder='Password' required></input>

                        {/* <label for='confirmpassword'></label>
                        <input type='password' id='confirmpassword' name='confirmpassword' className='w-40 sm:w-64 h-10 border border-gray-300 rounded-2xl px-4 mt-4 mb-2' placeholder='Confirm password' required></input> */}


                        {/* <label for='remember' className='text-sm'>
                            <input type="checkbox" id="remember" name="remember" /> Remember me
                        </label> */}
                        
                        <button onClick={handleSignUp} className='m-6 py-2 px-12 bg-[#38B398] rounded-xl text-sm font-semibold border text-white'>Sign Up</button>

                        <div className='shrink border-t border-t-gray-600 mb-8'>
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
                <div className="bg-[url('/bg.png')] bg-cover bg-no-repeat w-1/6 hidden sm:block"></div>
            </div>      
        </main>
    )
}

export default Signup