import React from 'react'

function Gtt() {
  return (
    <div className='d-flex flex-column align-items-center mt-5'>
    <div>
      <img className='emptystate' src='../image/gtt.jpg'/>
    </div>
    <div className='text-center' >You have not created any triggers. Learn more about setting<br/> automatic stoploss and target orders for your holdings.</div>
    
    <div>
      <button className='btn btn-primary my-3'>New GTT</button>
    </div>
    </div>
  )
}

export default Gtt  