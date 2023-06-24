import React from 'react'
import { Route, Routes } from "react-router-dom"




import Login from './component/Login'

import Home from './Home'
// import Gtt from './component/ordercomponent/Gtt'
import Gttmodal from './component/global_component/Gttmodal'


function App() {
  return (
    <>
    
    
  
  
    
  
      
    
   




        <Routes>  
      <Route path="/*" element={<Home/>} />

      
      <Route path="/login" element={<Login/>} />
      
     
      
      
      
    </Routes>





    

    
    </>
  )
}

export default App