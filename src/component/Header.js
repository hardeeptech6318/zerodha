import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'
import {BellOutlined } from "@ant-design/icons"

function Header() {
  return (
    <div className='label  border-bottom px-5 shadow-sm'>  
        <div className='row m-0 p-0 align-items-center m-auto  '>
            <div className='leftside m-0    border-end py-3 '>
            <div className='d-flex align-items-center'>
                <div className='mx-2'><span>NIFTY 50</span><span>18147.65</span><span>82.65 (0.46%)</span>  </div>
                <div className=''>SENSEX 61354.71 242.27 (0.40%)</div>
            </div>
            </div>
            <div className='rightside headerpadding'>
            <div className='d-flex justify-content-between w-100 align-items-center'>
            <Link to='/'><img className='logo mx-3' src='https://kite.zerodha.com/static/images/kite-logo.svg'/></Link>
            <div className='d-flex w-100 justify-content-end align-items-center'>
                
            <div className='mx-3'><Link   to="/" class=""><span>Dashboard</span></Link></div>
            <div className='mx-3'><Link  to="/orders" class=""><span>Orders</span></Link></div>
            <div className='mx-3'><Link  to="/holdings" class=""><span>Holdings</span></Link></div>
            <div className='mx-3'><Link  to="/position    " class=""><span>Positions</span></Link></div>
            <div className='mx-3'><Link to="/Funds" class=""><span>Funds</span></Link></div>
            <div className='mx-3'><Link to="/Funds" class=""><span>Apps</span></Link></div>
            
            </div>
            <div className='d-flex align-items-center justify-content-evenly ms-4'>
                <div className='py-2 mx-2 '><i class="bi bi-bell"></i></div>
                <div className='mx-2'>
                <Link to="/profile" class="dropdown-label">HR</Link>
               
                </div>
                <div className='ms-2'>EM1078</div>
            </div>
           
           
        </div>
            </div>
        </div>
      
      
   
    
    </div>
  )
}

export default Header