import React from 'react'
import { Link } from 'react-router-dom'

function Pricing() {
  return (
    <div className='my-[50px]'>
          <div className='mx-[90px] pt-[100px]'>
              <div className='md:flex justify-between ' >
                  <div>
                
                  <h1 className='text-5xl mb-[20px] font-bold '>  Everything you need for <span className='text-primary'>$99 a month</span></h1>
                  <p className='text-xl pb-10'>Includes every feature we offer plus unlimited projects and unlimited users</p>
                  </div>
                  
                  <div>
                    <Link to="/pricing/also" element={<Pricing/>}> <button className='md:w-[300px] bg-primary mb-[20px] font-bold w-full h-10 text-white '>Get Started Today</button></Link> 
                  </div>
                  
              </div> 
          </div>
            <hr class="mb-4  mx-[30px] h-px bg-gray-200 border-0 dark:bg-gray-700"/>
          <div className=' hidden mx-[50px] md:grid pt-[30px] m-4 gap-4 grid-cols-3'>
              <div className=''>
                  <div>
                      <h3 className='text-2xl md:text-4xl text-primary  font-bold'>Everthind you need </h3>
                      <h1 className='mb-[30px] text-2xl  md:text-4xl font-bold'>All in one platform </h1>
                      <p className='mb-[30px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, doloribus unde. , in unde velit illum accusantium facilis ullam illo sapiente temporibus expedita !</p>
                 </div> 
              </div>
             
                  <div>
                      <p className='pb-[30px]'>lorem ipsum dolor sit amet constcture</p>
                  <hr />
                  <p className='pb-[30px]'>lorem ipsum dolor sit amet constcture</p>
                  <hr />
                  <p className='pb-[30px]'>lorem ipsum dolor sit amet constcture</p>
                  <hr />
                  <p className='pb-[30px]'>lorem ipsum dolor sit amet constcture</p>
                  <hr />
                  <p className='pb-[30px]'>lorem ipsum dolor sit amet constcture</p>
                  <hr />
                  </div>
                  <div>
                      <p className='pb-[30px]'>lorem ipsum dolor sit amet constcture</p>
                  <hr />
                  <p className='pb-[30px]'>lorem ipsum dolor sit amet constcture</p>
                  <hr />
                  <p className='pb-[30px]'>lorem ipsum dolor sit amet constcture</p>
                  <hr />
                  <p className='pb-[30px]'>lorem ipsum dolor sit amet constcture</p>
                  <hr />
                  <p className='pb-[30px]'>lorem ipsum dolor sit amet constcture</p>
                  <hr />
                  </div>
              
          </div>
    </div>
  )
}

export default Pricing
