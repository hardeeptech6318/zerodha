import React from 'react'

function Alerts() {
  return (
    <div className='d-flex flex-column align-items-center mt-5'>
      <div>
<img className='empty-icon ' src='../image/alert.jpg'/>
</div>
<div>You haven't created any alerts.</div>
<div className='mt-4'>
  <button className='btn btn-primary'>Create new alert</button>
</div>
    </div>
  )
}

export default Alerts