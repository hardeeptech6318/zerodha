import React from 'react'
import { Route, Routes } from "react-router-dom"
import Header from './component/Header'
import Sidebar from './component/Sidebar'
import Dashboard from './component/Dashboard'

import Holdings from './component/Holdings'
import Positions from './component/Positions'
import Funds from './component/Funds'



import Orders from './component/Orders'
import Createorder from './component/global_component/Createorder'
import Gtt from './component/ordercomponent/Gtt'
import Gtt_modal from './component/global_component/Gtt_modal'


function App() {
  return (
    <>
       {/* <Createorder/> */}
       <Gtt_modal show={true}/>
    <header className='sticky-top bg-white bg-white'>
    <Header/>
    </header>
    <main>    
  
      
      <div className='wrapper d-flex mx-5 ' >
        <div className='leftside p-0 shadow-sm m-0  '>
<Sidebar/>
        </div>
        <div className='rightside   shadow-sm '  >
        <Routes>  
      <Route path="/" element={<Dashboard/>} />
      <Route path="/orders/*" element={<Orders/>} />
      
      <Route path="/holdings" element={<Holdings />} />
      <Route path="/position" element={<Positions/>} /> 
      
      <Route path="/funds" element={<Funds />} />
      
      
      
    </Routes>

        </div>
      </div>


    </main>

    
    </>
  )
}

export default App