import { ReactElement } from 'react'
import {BsGithub} from "react-icons/bs"
import {motion } from "framer-motion"
import { item } from './skillAnime'

interface ProjectProp{

img:string
title:string
desc:string
github?:string
demo?:string
}

export const Project= (Project:ProjectProp):ReactElement  => {
  return (
 <motion.div className='border-2  rounded-md p-2 border-orange-400   '
 whileHover={
  {
    scale:1.1,
    transition:{        
      delay:0.1,
      duration:0.2,
      ease:"backInOut"

    }
  }
 }
 variants={item}
 >

    <div className='h-56'>
 <img src={Project.img} alt='img'  className=' h-full w-full  rounded-md object-scale-down'/>

 </div>
<h3 className='my-3 text-2xl font-script font-bold tracking-wider '>{Project.title}</h3>
<p className='text-lg font-script py-2'>{Project.desc}</p>

<div className='flex justify-between  items-center my-1'>
<a href={Project.github}  target='_blank'> <BsGithub 

className='text-4xl hover:text-gray-400 transition duration-500 ease-in-out'

/>   </a>


  {Project.demo && <a href={Project.demo}  target='_blank' className='font-script rounded-md text-white  px-3 py-2  bg-orange-500 hover:bg-orange-400 transition duration-500 ease-in-out ' >Demo </a>}
</div>
 </motion.div>
  )
}

export default Project
