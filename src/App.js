import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './component/Home'
import Noservice from './component/Noservice'
import Pricing from './component/Pricing'
import Contacts from './routes/Contacts'
import FAQS from './routes/FAQS'
import Pricings from './routes/Pricings'

function App() {
  return (
      <>
    <Routes>
     <Route path='/' element={<Home/> } />
     <Route path='/pricing' element={<Pricings /> } />
     <Route path='/faqs' element={<FAQS /> } />
     <Route path='/contact' element={<Contacts />} />
     <Route path='/*' element={<Noservice />} />
        

    </Routes>
        
    </>
    
  )
}

export default App
