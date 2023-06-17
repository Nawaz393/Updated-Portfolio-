import React from 'react'
import { Link } from 'react-scroll'

export const Footer = () => {
  return (
    <div className='h-[70vh] w-full bcol radius shadow-xl flex justify-center  shadow-gray-800'>

        <div className='flex flex-col justify-evenly items-center w-full h-full'>

            <h1 className='text-4xl font-script text-white font-extrabold'>Muhammad Nawaz Khan</h1>


            <p className='text-white italic w-36 text-center'>Nawaz393@{new Date().getFullYear()} All right reserved</p>


    <Link to="home"
    
    smooth={true}
    duration={2000}
    
    className='cursor-pointer ml-auto italic text-white px-5' >back to top</Link>


        </div>
    </div>
  )
}


