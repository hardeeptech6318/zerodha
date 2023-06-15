import React from 'react'

function Marketdepth() {
  return (
    <>

<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{perspective:"1000px",backgroundColor:"rgba((255,255,255),0.7)"}} >
  <div class="modal-dialog"  >
    <div class="modal-content border shadow-sm " style={{maxWidth:"512px",padding:"25px",borderRadius:"4px"}}>
      
      <div class="  ">
      <div className='searchsidebar  d-flex border' >
      <label className="searchicon  border-end p-2  " ><i className=" bi bi-search"></i></label>
  <input className="sidebarsearch ps-3 py-2" placeholder="Search eg:infy,bse,nifty fut, nifty weekly,gold mcx" type="text" />
 
  <div>
   
  </div>

      </div>
    <div className='row mt-4'>
        <div className='col '><span className='fw-bold fs-6'>ADANIGREEN</span> <span className='xxlsmall'>BSE</span></div>
        <div className='col text-end'>957.20 <span className='text-success text-75'>+1.85 (+0.19%)</span></div>
    </div>
    <div className='row'>
    <div className='col-6'>
            <table class="table-borderless w-100 mb-2">
  <thead>
    <tr>
      <th  className='headerdim text-start px-0'>BID</th>
      <th  className='headerdim text-end px-0'>ORDERS</th>
      <th  className='headerdim text-end px-0'>QTY.</th>
    </tr>
  </thead>
  <tbody className='text-primary'>
    <tr>
      <td className='text-start'>0.00</td>
      <td className='text-end'>0</td>
      <td className='text-end'>0</td>
    </tr>
    <tr>
      <td className='text-start'>0.00</td>
      <td className='text-end'>0</td>
      <td className='text-end'>0</td>
    </tr>
    <tr>
      <td className='text-start'>0.00</td>
      <td className='text-end'>0</td>
      <td className='text-end'>0</td>
    </tr>
    <tr>
      <td className='text-start'>0.00</td>
      <td className='text-end'>0</td>
      <td className='text-end'>0</td>
    </tr>
    <tr>
      <td className='text-start'>0.00</td>
      <td className='text-end'>0</td>
      <td className='text-end'>0</td>
    </tr>
  </tbody>
  <tfoot className='text-primary'>
        <tr>
          <td className='text-start'>Total</td>
          <td></td>
          <td className='text-end'>0</td>
        </tr>
  </tfoot>
  
</table>
            </div>
            <div className='col-6'>
            <table class="table-borderless w-100 ">
  <thead>
    <tr>
      <th scope="col" className='headerdim px-0 text-start'>OFFER</th>
      <th scope="col" className='headerdim px-0 text-end'>ORDERS</th>
      <th scope="col" className='headerdim px-0 text-end'>QTY.</th>
    </tr>
  </thead>
  <tbody className='text-red'>
  <tr>
      <td className='text-start'>0.00</td>
      <td className='text-end'>0</td>
      <td className='text-end'>0</td>
    </tr>
    <tr>
      <td className='text-start'>0.00</td>
      <td className='text-end'>0</td>
      <td className='text-end'>0</td>
    </tr>
    <tr>
      <td className='text-start'>0.00</td>
      <td className='text-end'>0</td>
      <td className='text-end'>0</td>
    </tr>
    <tr>
      <td className='text-start'>0.00</td>
      <td className='text-end'>0</td>
      <td className='text-end'>0</td>
    </tr>
    <tr>
      <td className='text-start'>0.00</td>
      <td className='text-end'>0</td>
      <td className='text-end'>0</td>
    </tr>
  </tbody>
  <tfoot className='text-red'>
        <tr>
          <td>Total</td>
          <td></td>
          <td className='text-end'>0</td>
        </tr>
  </tfoot>
</table>
            </div>
          </div>
          
          <div className='row border-top py-3 '>
          <div className='row '>
            <div className='col-6  '><div className='row  '><div className='col-6   lighttext '>Open</div><div className='col-6   text-end'>555.5</div></div></div>
            <div className='col-6 '><div className='row '><div className='col-6   lighttext'>High</div><div className='col-6  pe-0 text-end'>559.5</div></div></div>
          </div>
          <div className='row '>
          <div className='col-6 '><div className='row'><div className='col-6   lighttext '>Low</div><div className='col-6   text-end'>555.5</div></div></div>
          <div className='col-6 '><div className='row'><div className='col-6   lighttext '>Prev. Close</div><div className='col-6  pe-0 text-end'>555.5</div></div></div>
          </div>
          <div className='row '>
          <div className='col-6 '><div className='row'><div className='col-6   lighttext '>volume</div><div className='col-6   text-end'>N/A</div></div></div>
          <div className='col-6 '><div className='row'><div className='col-6   lighttext '>Avg. price</div><div className='col-6  pe-0 text-end'>N/A</div></div></div>
          </div>
          <div className='row '>
          <div className='col-6 '><div className='row'><div className='col-6   lighttext '>LTQ</div><div className='col-6   text-end'>N/A</div></div></div>
          <div className='col-6 '><div className='row'><div className='col-3   lighttext '>LTT</div><div className='col pe-0 w-100 text-end'>2023-05-26 15:59:37</div></div></div>
          </div>
          <div className='row'>
          <div className='col-6 '><div className='row'><div className='col-6   lighttext '>Lower circuit</div><div className='col-6   text-end'>555.5</div></div></div>
          <div className='col-6 '><div className='row'><div className='col-7   lighttext '>Upper circuit</div><div className='col-5  pe-0 text-end'>555.5</div></div></div>
          </div>

    </div>
      </div>
      <div class="p-1 border-top pt-3">
        <div className='row'>
            <div className='col-4'>
                <butto className="btn btn-outline-primary py-2 ">Createt GTT</butto>
            </div>
            <div className='col-8 text-end'>
            <button type="button" class="btn btn-outline-primary py-2 px-3">Buy</button>
            <button type="button" class="btn btn-outline-danger mx-2 py-2 px-3">Sell</button>
            <button type="button" class="btn btn-outline-secondary py-2 px-3" data-bs-dismiss="modal">Close</button>
       
            </div>
        </div>
        
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Marketdepth