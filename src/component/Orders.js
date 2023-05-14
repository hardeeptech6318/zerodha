import React from 'react'
import { Link } from 'react-router-dom'

function Orders() {
  return (
    <div>
      <nav class="nav nav-pills nav-justified">
  <Link to="/orders" class="nav-link active" >Orders</Link>
  <Link to="/orders/gtt" class="nav-link" >GTT</Link>
 
</nav>
    </div>
  )
}

export default Orders