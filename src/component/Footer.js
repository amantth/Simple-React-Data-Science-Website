import React from 'react'

function Footer() {
  return (
    <div className='md:flex grid grid-cols-2  justify-evenly  bg-darkgrey text-white  p-[50px]'>
      <div className='mb-[10px]'>
        <h3 className='text-xl pb-[10px]  font-bold'>Solution</h3>
        <p className='pb-[5px] '>Mareting</p>
        <p className='pb-[5px] '>Analytics</p>
        <p className='pb-[5px] '>Commerce</p>
        <p className='pb-[5px] '>insignt</p>


      </div>
      <div className='mb-[10px]'>
<h3 className='text-xl  pb-[10px] font-bold' >Support</h3>
        <p className='pb-[5px] '>Pricing</p>
        <p className='pb-[5px] '>Documentation</p>
        <p className='pb-[5px] '>Guides</p>
        <p className='pb-[5px] '>Api status</p>
      </div>
       
      <div className='mb-[10px]'>
<h3 className='text-xl  pb-[10px] font-bold'>Company</h3>
        <p className='pb-[5px] '>About</p>
        <p className='pb-[5px] '>Blog</p>
        <p className='pb-[5px] '>Jobs</p>
        <p className='pb-[5px] '>Press</p>
        <p className='pb-[5px] '>Partners</p>

      </div>
      <div className='mb-[10px]'>
<h3 className='text-xl pb-[10px]  font-bold'>Legal </h3>
        <p className='pb-[5px] '>claim</p>
        <p className='pb-[5px] '>Privacy</p>
        <p className='pb-[5px] '>Terms</p>
        <p className='pb-[5px] '>Api status</p>
      </div>
      <div className=''>
        <h1 className='text-xl pb-[20px] font-bold'>Subscribe to our newsletter</h1>
        <p >The latest news,article and resources sent to inbox weekly</p>
        <div className='flex mt-[10px] '>
          <input type="text" className='my-[10px] mr-[10px] outline-none text-black p-4 h-[40px] ' placeholder='Enter your email' />
          <button className='bg-primary flex justify-center items-center mt-[10px] p-4 h-[40px] w-[150px] text-white'>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Footer
