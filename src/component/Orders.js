import React from 'react'
import { Link,Outlet ,Routes,Route ,NavLink   } from 'react-router-dom'
import Gtt from '../component/ordercomponent/Gtt'
import Basket from './ordercomponent/Basket'
import Order from './ordercomponent/Order'

import Ipo from './ordercomponent/Ipo'
import Auctions from './ordercomponent/Auctions'
import Alerts from './ordercomponent/Alerts'
import Sip from './ordercomponent/Sip'


function Orders() {
  return (
    <div  >
    <div className='d-flex align-items-center border-bottom   px-4  ' >
      <div className='navhover  px-3' ><NavLink   className={({isActive}) => (isActive ? "active" : 'none')}  to="" >Orders</NavLink>  </div>
      <div className='navhover  px-3' ><NavLink   className={({isActive}) => (isActive ? "active" : 'none')}  to="gtt" >GTT</NavLink>  </div>
      <div className='navhover  px-3' ><NavLink   className={({isActive}) => (isActive ? "active" : 'none')}  to="baskets" >Baskets</NavLink>  </div>
      <div className='navhover  px-3' ><NavLink   className={({isActive}) => (isActive ? "active" : 'none')}  to="sip" >SIP</NavLink>  </div>
      <div className='navhover  px-3' ><NavLink   className={({isActive}) => (isActive ? "active" : 'none')}  to="alerts" >Alerts</NavLink>  </div>
      <div className='navhover  px-3' ><NavLink   className={({isActive}) => (isActive ? "active" : 'none')}  to="ipo" >IPO</NavLink>  </div>
      <div className='navhover  px-3' ><NavLink   className={({isActive}) => (isActive ? "active" : 'none')}  to="auction" >Auctions</NavLink>  </div> 
      

    </div>
    <div>
    <Routes>
    <Route path="" element={<Order/>} />
        <Route path="gtt" element={<Gtt />} />
        <Route path="baskets" element={<Basket/>} />
        <Route path="alerts" element={<Alerts/>} />
        <Route path="ipo" element={<Ipo/>} />
        <Route path="sip" element={<Sip/>} />
        <Route path="auction" element={<Auctions/>} />
        

      </Routes>
    </div>


    </div>
  )
}

export default Orders