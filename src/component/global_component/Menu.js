import React from 'react'

function Menu() {
  return (
    <>
    <div class="dropdown">
  <button class="menu " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    <span className="" ><i  class="bi bi-three-dots "></i></span>
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
    </>
  )
}

export default Menu