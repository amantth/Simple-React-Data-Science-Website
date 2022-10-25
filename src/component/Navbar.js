import React,{useState} from 'react'
import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
import {FaBars,FaTimes} from "react-icons/fa"
import Home from './Home'
import Pricing from './Pricing'

function Navbar() {
  const [active, setActive] = useState(false)
  const handleClick = () => {
    setActive(!active)
  }
  return (
    <header className='sticky top-0 w-full h-[100px] bg-darkgrey '>
          <nav className=' relative flex justify-between m-w-[1240px] animate ease-in duration-[700] h-full px-[1rem] py-0 m-auto overflow-hidden'>
              <div>
               <Link to="/"><img className='flex items-center w-[80px] h-auto' alt="logo" src={logo}/></Link>             
        </div>
        
        <ul className={active ? 'max-[960px]:fixed mt-[10px] max-[960px]:justify-center  max-[960px]:bg-black/80  max-[960px]:w-full  max-[960px]:h-full max-[960px]:flex-col max-[960px]:text-center max-[960px]:left-[0] text-center max-[960px]:flex flex items-center  justify-start' : 'max-[960px]:fixed max-[960px]:justify-center  max-[960px]:bg-black/80 max-[960px]:w-full  max-[960px]:h-full max-[960px]:flex-col max-[960px]:text-center max-[960px]:left-[-100%] text-center max-[960px]:flex  flex items-center justify-start'}>
          
                  <li className='pb-[1.5rem]'><Link to="/"   className='py-5 px-[1.5rem] md:text-[20px] max-[960px]:text-[1.8rem] '>Home</Link></li>
                  <li className='pb-[1.5rem]'><Link to="/pricing"  className='py-5 px-[1.5rem] md:text-[20px] max-[960px]:text-[1.8rem]  '>Pricing</Link></li>
                  <li className='pb-[1.5rem]'><Link to="/faqs"  className='py-5 px-[1.5rem] md:text-[20px] max-[960px]:text-[1.8rem]   '>FAQ</Link></li>
                  <li className='md:mr-[200px] pb-[1.5rem]'><Link to="/contact"  className='py-5 px-[1.5rem] md:text-[20px] max-[960px]:text-[1.8rem]  '>Contact</Link></li>
              </ul>
        <div className='flex md:hidden absolute top-[2.5rem] right-[1rem] '>
          {active? <FaTimes size={30} className="cursor-pointer text-white" onClick={()=>{handleClick()}}/>: <FaBars onClick={()=>{setActive(!active)}} size={30} className=' text-white cursor-pointer' />}
                 
              </div>
      </nav>
    </header>
  )
}

export default Navbar
