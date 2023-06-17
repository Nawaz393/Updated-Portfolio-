import { Navbar,Intro, Line, Skill, Project,Footer, Contact  } from "./components"

import {motion} from "framer-motion"
import { container, } from "./components/skillAnime"
import {  useInView } from "react-intersection-observer"
import { technologies,projects, contacts } from "./data"
import { Element } from "react-scroll"

import { useMyContext } from "./Context"


const App = () => {
  const [ref, inView] = useInView({
    threshold: 0.15,
  });

  const [projectRef,pInView]=useInView({

threshold:0.15
  
  })


  



  const {darkmode}=useMyContext()

  let color:string= !darkmode?"bg-white text-black": " bg-gray-900 text-white "
 






  const [contactRef,cInView]=useInView({

    threshold:0.15

  })




  


  return (
 <div className={color} >


 <header 
  id="home"
 > <Navbar/>
 
 
 
 </header>
 <Element name="home"  className="md:my-10">
 <Intro />
 </Element>
  


<Element name="skills">

   
    <Line text={"Skills"}/> 


<section

ref={ref}
>
<motion.div
  id="skills"
  className="Grid"
 
  variants={container}
  initial="hidden"
  animate={inView ? "visible" : ""}
>
  {technologies.map((item, index) => (
    <Skill index={index} {...item} />
  ))}
</motion.div>
</section>
</Element>

<Element name="projects" >
<Line text={"Projects"}/>
<section
ref={projectRef}
>
<motion.div

variants={container}
initial="hidden"
animate= {pInView?"visible":""}
className="Grid"
>



{projects.map((project)=><Project  {...project}/>)}





</motion.div>





</section >
</Element>
<Element name="contact">
<Line text={"Contact"}/> 


<section 


ref={contactRef}


className="my-16"

>

  <motion.div

className="Grid  "
  
  variants={container}
initial="hidden"
animate={cInView?"visible":""}
  >

  {

    contacts.map((contact)=><Contact {...contact}/>)
  }

  </motion.div>


</section>
</Element>




<footer>

<Footer/>


</footer>
 </div>
  )
}

export default App
