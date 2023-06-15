import React from 'react'
import Dashboard from '../Dashboard'
import Orders from '../Orders'
import Holdings from '../Holdings'
import Positions from '../Positions'
import Funds from '../Funds'

import { Route, Routes } from "react-router-dom"
import Sidebar from '../Sidebar'
import Header from "../Header"
import Gttmodal from '../global_component/Gttmodal'
import Marketdepth from '../global_component/Marketdepth'
import Createalert from '../global_component/Createalert'

function Home() {
  return (
   <>
        {/* <Createorder/> */}
       {/* <Gttmodal/> */}
       <Createalert/>
       <Marketdepth/>
   <header className='sticky-top bg-white bg-white'>
    <Header/>
    </header>

    <div className='wrapper d-flex mx-xxl-5 ' >
        <div className='leftside p-0 shadow-sm m-0  '>
<Sidebar/>
        </div>
        <div className='rightside   shadow-sm '  >
        <Routes>  
      <Route path="" element={<Dashboard/>} />
      
      <Route path="orders/*" element={<Orders/>} />
      
      <Route path="holdings" element={<Holdings />} />
      <Route path="position" element={<Positions/>} /> 
      
      <Route path="funds" element={<Funds />} />
      
      
      
    </Routes>

        </div>
      </div>
   
   </>
  )
}

export default Home