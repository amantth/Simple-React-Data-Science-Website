import React from 'react'
import { FaDatabase } from 'react-icons/fa'


function Testimonial() {
  return (
    <div className='flex md:hidden justify-center'>
    <div  className='flex m-4  rounded-[20px]  bg-gradient-to-r from-cyan-700 to-blue-700   w-[500px] h-[400px] flex-col p-10 text-white justify-center '>
           <i className='p-2 flex'><FaDatabase size={20} className="mr-2"/><p>Staxx</p></i> 
            <p className='p-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum odit hic quas voluptatum voluptatem culpa soluta sint perferendis, nulla consequatur in distinctio! </p>    
            <p className='p-2'>Maria chivers</p>
            <p className='p-2'>CEO,Stakk</p>
        </div>
    </div>
  )
}

export default Testimonial
