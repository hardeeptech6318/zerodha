import React from 'react'
import { Route, Routes } from "react-router-dom"
import Header from './component/Header'
import Sidebar from './component/Sidebar'
import Dashboard from './component/Dashboard'

import Holdings from './component/Holdings'
import Positions from './component/Positions'
import Funds from './component/Funds'


import Gtt from './component/ordercomponent/Gtt'
import Orders from './component/Orders'


function App() {
  return (
    <>
    
    <header className='sticky-top bg-white'>
    <Header/>
    </header>
    <main>    
    <div className=' mx-5 p-0 '>
      
      <div className='row m-0 p-0'>
        <div className='leftside p-0 border m-0'>
<Sidebar/>
        </div>
        <div className='rightside p-0 m-0  shadow-sm'>
        <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/orders/*" element={<Orders/>} />
      {/* <Route path="/gtt" element={<Gtt/>} /> */}
      {/* <Route/>   */}
      <Route path="/holdings" element={<Holdings />} />
      <Route path="/position" element={<Positions/>} /> 
      
      <Route path="/funds" element={<Funds />} />
      
      
      
    </Routes>

        </div>
      </div>


    </div>
    </main>

    
    </>
  )
}

export default App