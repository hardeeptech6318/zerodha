import React from 'react'
import Gttmodal from './Gttmodal'

function Menu() {
  return (
    <>
    <div class="dropdown">
  <button class="menu " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    <span className="" ><i  class="bi bi-three-dots "></i></span>
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item padding810" href="#"><span className='me-2' ><i class="bi bi-dash"></i></span>Exit</a></li>
    <li><a class="dropdown-item padding810 " href="#"><span className='me-2 ' ><i class="bi bi-plus"></i></span>Add</a></li>
    <li><a class="dropdown-item padding810 " href="#"><span className='me-2' ><i className="bi bi-menu-button"></i></span>View breakdown</a></li>
    
    
    <li><a class="dropdown-item padding810  d-flex" href="#"><span className='me-2' ><img style={{maxWidth:"15px"}} src="./image/gtticon.png"/></span><span>Create GTT</span></a></li>
    <li><a class="dropdown-item padding810  d-flex" href="#"><span className='me-2' ><img style={{maxWidth:"15px"}} src='./image/alerticon.png'/></span><span>Create Alert</span></a></li>
    <li><a class="dropdown-item padding810 " href="#"><span className='me-2' ><i class="bi bi-gift"></i></span>Send as gift</a></li>
    <li><a class="dropdown-item padding810 " href="#"><span className='me-2' ><i className="bi bi-collection"></i></span>Market depth</a></li>
    <li><a class="dropdown-item padding810 " href="#"><span className='me-2' ><i class="bi bi-graph-up-arrow"></i></span>Chart</a></li>
    <li><a class="dropdown-item padding810 " href="#"><span className='me-2' ><i class="bi bi-binoculars"></i></span>Add to marketwatch</a></li>
    <li><a class="dropdown-item padding810 " href="#"><span className='me-2' ><img style={{maxWidth:"15px"}} src='./image/tickertape.png'/></span>Fundamentals</a></li>
    <li><a class="dropdown-item padding810 " href="#"><span className='me-2' ><img style={{maxWidth:"15px"}} src='./image/streak.png'/></span>Technicals</a></li>
    
  </ul>
</div>
    </>
  )
}

export default Menu