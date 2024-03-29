import React from 'react'
import Dashboard from './component/Dashboard'
import Orders from './component/Orders'
import Holdings from './component/Holdings'
import Positions from './component/Positions'
import Funds from './component/Funds'

import { Route, Routes } from "react-router-dom"
import Sidebar from './component/Sidebar'
import Header from "./component/Header"
import Gttmodal from './component/global_component/Gttmodal'
import Marketdepth from './component/global_component/Marketdepth'
import Createalert from './component/global_component/Createalert'
import { useSelector, useDispatch } from 'react-redux'
import { ordermodal } from './features/api/globalstate'
import Createorder from './component/global_component/Createorder'
import TradingViewWidget from './TradingViewWidget'

function Home() {
  const ordermodal = useSelector(state => state.counter.value)
  

  
  
  return (
   <>
        {ordermodal?<Createorder/>:null}
       
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
      <Route path="chart" element={<TradingViewWidget/>} />
      
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