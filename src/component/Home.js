import React from 'react'
import Contact from './Contact'
import FAQ from './FAQ'
import Footer from './Footer'
import Hero from './Hero'
import Navbar from './Navbar'
import Pricing from './Pricing'
import Testimonial from './Testimonial'

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Pricing />   
      <Testimonial />
      <FAQ />
      <Contact />
      <Footer/>  
    </div>
  )
}

export default Home
