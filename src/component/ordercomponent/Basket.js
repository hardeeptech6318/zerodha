import React from 'react'

function Basket() {
  return (
    <div className='d-flex flex-column align-items-center mt-5'>
<div>
      <img className='empty-icon' src='../image/basket.jpg'/>
      </div>
      <div>You haven't created any baskets.</div>
      <div className='mt-4'>
        <button className='btn btn-primary'>New basket</button>
      </div>
    </div>
  )
}

export default Basket