import React from 'react'

function Order() {
  return (
    <div className='orderpage d-flex justify-content-center align-items-center flex-column my-5'>
        <div className='orderjournal '>
        <i class="bi bi-journal-bookmark"></i>
        </div>
        <div className=''>You haven't placed any orders today</div>
        <div className='my-4'>
            <button className='btn btn-primary'>Get started</button>        
        </div>
        <div className="mx-3"><a className=" orderhistory " href="/"><span className="me-1 text-primary  " ><i className="bi bi-record-circle-fill"></i></span>View history</a></div>
        
        </div>
  )
}

export default Order