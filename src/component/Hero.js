import React from 'react'
import {FaDatabase, FaAsterisk, FaAccusoft, FaTwitter, FaGithub } from "react-icons/fa"
 import {Link } from "react-router-dom"
function Hero() {
  return (
    <div className='w-full pt-[50px] md:h-[100vh] h-full text-white bg-darkgrey'>
          <div className='flex flex-col md:flex-row  items-center ml-[20px] md:ml-[50px] pt-[140px] '>
              <div className='md:mt-[-100px]  pb-[100px] '>
                  <div className='flex flex-col'>
                      <h1 className='text-4xl pt-[10px]  md:text-6xl  md:pb-[10px]  md:font-bold'>Data to enrich your</h1>
                      <h1 className='text-4xl md:text-6xl  text-primary font-bold pb-[30px]'>Online bussiness</h1>
                  <p className=' text-xl md:text-[20px]  mb-[20px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit suscipit <br /> iure beatae ducimus iusto b voluptatum. Porro fugit ullam itaque alias, .</p>
                  </div>
                  <div className='flex flex-col'>
                      <h4 className='mb-[30px] text-xl'>Used By</h4>
                      <div className='flex opacity-30 '>
                          <FaDatabase size={30} className='items-center pr-[10px]'/><p className='pr-[10px] text-[20px]'>Startxx</p>
                          <FaAsterisk  size={30} className='flex items-center justify-center pr-[10px]'/><p className='pr-[10px] text-[20px]'>Star AI</p>
                          <FaAccusoft  size={30} className='flex items-center justify-center pr-[10px]' /><p className='pr-[10px] text-[20px]'>Accusoft</p>
                      </div>
                  </div>
              </div>
              <div className='hidden md:flex'>
                  <div className=' p-[30px] w-[400px] text-black  mt-[100px] rounded-lg md:mt-[-70px] md:ml-[250px]  h-[500px] bg-white'>
                      <div className=''>
                          <h4 className='pb-[10px] text-[20px] text-bold'>Sign in with</h4>
                      <hr class="mb-4  h-px bg-gray-200 border-0 dark:bg-gray-700"/>
                        <div className='pb-10 grid grid-cols-3 gap-3'>
                          <button className='flex items-center justify-center hover:bg-primary hover:text-white'>FACEBOOK</button>
                          <button className='flex items-center justify-center hover:bg-primary hover:text-white'>TWITTER</button>
                              <button className='flex items-center justify-center hover:bg-primary hover:text-white'>GITHUB</button>
                          
                      </div> 
                     </div>
                      
                      <div >
                          <form className="flex flex-col" action="">
                          <input className='p-[10px] border-primary focus:outline-none  rounded-lg text-[17px] mb-[20px] border' type="text" placeholder='Name'/>
                          <input className='p-[10px] border-primary focus:outline-none rounded-lg text-[17px] mb-[20px] border' type="email" placeholder='Email'/>
                          <input className='p-[10px]  border-primary focus:outline-none  rounded-lg text-[17px] mb-[20px] border' type="password" placeholder='Password'/>
                          <button className='bg-primary border-primary text-white  rounded-[20px] h-[40px]'> Create your account</button>
                          </form>
                      </div>
                      <hr className=''/>
                      <div className='pt-[20px]'>
                          <p>By Signing up your agree to our <span ><Link className='text-primary'>Terms ,Data policy and Cokies policy</Link></span></p>
                      </div>
                </div>  
              </div>
      </div>
    </div>
  )
}

export default Hero
