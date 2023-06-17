import  { ReactElement, useState } from 'react';
import { BsMoon, BsList, BsSun } from 'react-icons/bs';

import {Link} from "react-scroll"
import { useMyContext } from '../Context';



export const Navbar = (): ReactElement => {
  interface NavbarElement {
    name: string;
    link: string;
  }

  const navbarElements: NavbarElement[] = [
    { name: 'Home', link: 'home' },
    { name: 'Skills', link: 'skills' },
    { name: 'Projects', link: 'projects' },
    { name: 'Contact', link: 'contact' },
   
    
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const {darkmode,setDarkMode}=useMyContext();




  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`flex  fixed top-0 flex-col z-10 ${darkmode?"bg-gray-900":"bg-gray-50 "}  md:h-16 h-12 md:flex-row justify-between items-center shadow-md w-full`}>
      <div className="flex items-center justify-between w-full  ">
        <button
          className="md:hidden ml-4 p-2   "
          onClick={toggleMenu}
        >
          <BsList 
          size="2em"
          title="menu"
          alt="menu"
          role="button"
          />
        </button>
        <h3 className="mx-10 lg:text-3xl md:text-xl text-2xl tcol font-script font-extrabold"> <span className='md:hidden lg:inline-block'>Muhammad</span> Nawaz Khan</h3>
      </div>
      <ul
        className={`${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:flex fixed md:left-0 md:top-0 top-12 w-1/4 md:w-auto right-0 md:tcol text-white bottom-0 flex-col items-center justify-center bcol z-10 md:relative md:translate-x-0 md:flex-row md:items-center md:justify-between md:bg-transparent mx-0 md:mx-10 text-2xl font-bold font-script transition-transform duration-300 ease-in-out`}
      >
        {navbarElements.map((element) => (
          <li

         
            className="p-4 hover:text-3xl transition-all cursor-pointer"
            key={element.name}
          >
              <Link
      activeClass="active"
      to={element.link}
      spy={true}
      smooth={true}
      offset={-10} // adjust the offset based on your layout
      duration={2000}
    >  {element.name}</Link>
          </li>
        ))}
        <li className="p-4"
        role='button'

        onClick={()=>setDarkMode(!darkmode)}
        >




        {!darkmode? <BsSun  className={`text-2xl text-black`} />
          :<  BsMoon className={`text-2xl text-white`} />}
        </li>
      </ul>
    </nav>
  );
};

