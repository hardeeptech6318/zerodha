import React from 'react'
import { Route, Routes } from "react-router-dom"
import Header from './component/Header'
import Sidebar from './component/Sidebar'
import Dashboard from './component/Dashboard'

import Holdings from './component/Holdings'
import Positions from './component/Positions'
import Funds from './component/Funds'



import Orders from './component/Orders'


function App() {
  return (
    <>
    
    <header className='sticky-top bg-white bg-white'>
    <Header/>
    </header>
    <main>    
    <div className=' mx-5 p-0 bg-white '>
      
      <div className='row m-0 p-0'>
        <div className='leftside p-0 shadow-sm m-0  '>
<Sidebar/>
        </div>
        <div className='rightside p-0 m-0  shadow-sm'>
        <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/orders/*" element={<Orders/>} />
      
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