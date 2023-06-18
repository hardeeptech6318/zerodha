import React from 'react'

function Sip() {
  return (
    <div className='d-flex flex-column align-items-center mt-5'>
<div>
      <img className='empty-icon' src='../image/sip.jpg'/>
    </div>
    <div>You haven't created any SIPs.</div>
    <div className='mt-4'><button className='btn btn-primary py-2 px-3'>Create new SIP</button></div>
    </div>
  )
}

export default Sip