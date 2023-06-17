import React from 'react'
import {motion} from 'framer-motion'


import  monog from "../assets/mongodb.png"
import { item } from './skillAnime'


interface ContactProp{


    img:string
    title:string,
    desc:string,
    link:string

}
export const Contact = (contact:ContactProp) => {
  return (
    <motion.div className='rounded-md w-80  border-orange-400 h-72 flex flex-col items-center border-2'
    
    variants={item}

    whileHover={{

        scale:1.05

        ,
        transition:

        {


            duration:0.3,
            ease:"easeInOut"
        }
    }}
    
    >
    

<img src={contact.img}  alt="contact  " className='h-24 m-5 '/>



<h1 className='text-xl font-bold '>{contact.title}</h1>
<h3 className='text-lg font-semibold'>{contact.desc}</h3>
<a href={contact.link}   target="_blank" className=' text-white text-center font-script text-xl py-1 px-10 rounded-md   bcol hover:bg-orange-600 transition duration-500 ease-in-out' >  Link</a>

    </motion.div>
  )
}

