import {  motion} from "framer-motion"

import { item} from "./skillAnime"

import { useState } from "react";
import { useMyContext } from "../Context";



interface Props{


  img:string,
  name:string,
  description:string,
  color:string
  index:number

}
export const Skill = ({img,name,description,color,index}:Props) => {

  const {darkmode}=useMyContext();


  let textcolor:string= darkmode?"text-white": "text-black "

  let style=index%2==0?` -top-10 rounded-br-full origin-top-left`:` top-0  rounded-tl-full bottom-0 origin-bottom-right`


  const [mouseEnter,SetisMouseEnter]=useState(false);

    return (
      <motion.div className={`relative rounded-md  hover:scale-50 h-72 flex flex-col items-center border-2 border-orange-500 overflow-hidden group hover:shadow-md text-black hover:text-white  ${textcolor} `}
  variants={item}
  whileHover={

    {
      scale:1.1
, 
      transition:{

        
        delay:0.1,
        duration:0.2,
        ease:"backInOut"
        



      }
    }
   }
onMouseEnter={()=>{SetisMouseEnter(prev=>!prev)}}
onMouseLeave={()=>{SetisMouseEnter(prev=>!prev)}}
      >
   <img src={img} alt="" className={`h-20 m-5 filter saturate-150 transition duration-200 ${mouseEnter?"rounded-glass-effect":""}`} />

      
        <h2 className="text-lg font-bold  "> {name}</h2>
        <p className="w-85 px-2 text-centertext-base transition duration-500 tracking-tighter">
          {description}
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, molestias eos! Reprehenderit distinctio,
          suscipit quasi culpa tempore animi architecto facere veniam dolor vitae a iusto, quo, sit ea delectus
          repudiandae magnam nisi. */}
        </p>
        <div className={`  ${style} absolute  -z-50   transition-all duration  w-full h-full transform scale-x-0 scale-y-0 opacity-100 group-hover:scale-x-150 group-hover:scale-y-150 group-hover:opacity-100 `}
        style={{

          backgroundColor:color
        }
        }
        
        >
        </div>
        </motion.div>
  
    );
  };
  
  
  
  
  
   