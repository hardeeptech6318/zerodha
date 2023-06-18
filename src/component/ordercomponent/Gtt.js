import React from 'react'

function Gtt() {
  return (
    <div className='d-flex flex-column align-items-center mt-5'>
    <div>
      <img className='emptystate' src='../image/gtt.jpg'/>
    </div>
    <div className='text-center lighttext' >You have not created any triggers. <a href='/' className='text-primary fs-14' >Learn more</a> about setting<br/> automatic stoploss and target orders for your holdings.</div>
    
    <div>
      <button className='btn btn-primary my-3 px-3 py-2'>New GTT</button>
    </div>
    </div>
  )
}

export default Gtt  