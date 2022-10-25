import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'

function Contact() {
  return (
    <div className='md:grid grid-rows-1 pt-[30px]  md:grid-cols-2 mt-[100px] md:mx-[100px] gap-10  m-[50px] mb-[50px] '>
          <div>
              <div>
                  <h1 className='text-3xl mb-[10px] font-bold'>Get in touch </h1>
                  <p className='pb-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere expedita magnam, veritatis delectus cupiditate, repellat tempora nemo nobis, eius quibusdam fuga illo.</p>
                  <p className='pb-[20px]'>742 Everygreen Terrace</p>
                  <p className='pb-[20px]'>spring OR 12345</p>
                <p className='flex'><FaPhone/> <p className='pb-[20px] pl-[10px]'>+(555) 123-4567</p></p> 
                <p className='flex'><FaEnvelope/> <p className='pb-[20px] pl-[10px]'>support@example.com</p></p> 
                  <p className='pb-[20px]'>Loking for carrere? <span>Vioutline-none ew all job opening</span></p>
              </div>
          </div>
          <div>
              <form  action="">
                  <input type="text"  className='outline-none  rounded-lg border-primary  border mb-[30px] p-2 w-[500px] h-[50px]' placeholder='Full name' />
              <input type="email" className='outline-none  rounded-lg border-primary  border p-2  mb-[30px] w-[500px] h-[50px]'  placeholder='Email' />
              <input type="text"  className='outline-none rounded-lg border-primary  border  p-2 mb-[30px] w-[500px] h-[50px]' placeholder='Phone' />
              <input type="text"  className='outline-none rounded-lg border-primary  border  p-2 mb-[30px] w-[500px] h-[50px]' placeholder='Message' />
                <div className='flex '>
              <input type="checkbox"  className='outline-none p-2 ' name='by' placeholder='Full name' />
              <label  className='p-2 ' htmlFor="by">By cheacking thid box you agree to the privacy and cokkie policy</label>
                
</div>
<button type='submit' className='bg-primary mt-[20px] h-[40px] w-[500px] text-white'>Submit</button>
          
              </form>
          </div>    
    </div>
  )
}

export default Contact
