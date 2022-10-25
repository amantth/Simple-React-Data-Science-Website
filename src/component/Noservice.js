import React from 'react'
import { Link } from 'react-router-dom'

function Noservice() {
  return (
    <div className='flex justify-center items-center h-[100vh]'>
      <div className='w-[400px] text-white h-[400px] bg-secondary flex-col rounded-lg flex justify-center items-center'>
        <h1 className='pb-[20px] text-2xl'>PLEASE ENTER VALID URL</h1>
      <Link to="/"><button className='bg-white hover:text-white hover:bg-darkgrey font-bold text-black'>Go back to home</button></Link>  
     </div>
    </div>
  )
}

export default Noservice
