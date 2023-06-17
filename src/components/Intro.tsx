import { ReactElement } from 'react'
import mypic from "../assets/withoutbg.png"
import { motion } from 'framer-motion'
import { paragraph, picture } from './introAmine'

export const Intro = (): ReactElement => {
  return (
    <div className=' grid grid-cols-1 md:grid-cols-2 place-items-center place-content-center px-10 py-16 md:py-4 '>
      <div>
        <motion.p

          variants={paragraph}
          initial="hidden"
          animate="visible"
          className="text-xl font-script"
        >
          Hello I am
          <span className="px-2 text-2xl font-extrabold tcol">Muhammad Nawaz Khan</span> A full stack developer with
          expertise in modern JavaScript frameworks and diverse databases. Skilled in front-end and back-end development,
          I create seamless user experiences using React and Node.js. I work with databases like MySQL, PostgreSQL,
          MongoDB, and Firebase to deliver efficient and secure web applications. Explore my portfolio to see examples of
          my work in action.
        </motion.p>
      </div>
      <div className=' my-10 border-gray-600    '>
        <motion.img src={mypic} alt=""
className='rounded-md bg-white h-4/5 w-5/6   '

          variants={picture}
          initial="hidden"
          animate="visible"
        />
      </div>
    </div>
  )
}

