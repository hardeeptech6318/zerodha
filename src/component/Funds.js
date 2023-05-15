import React from 'react'

function Funds() {
  return (
    <div className='p-4 pe-3'>
      <div>
        <div className='text-end  p-3'>
          <span className='label' >  Instant, zero-cost fund transfers with <span><i className="bi bi-bank2"></i></span> </span>
          <a className='fundbutton mx-2 px-4 ' href='/'>Add Funds</a>
          <a className='withdrawbutton px-4 ' href='/'>Withdraw</a>

        </div>
        <div className='row'>
          <div className='col-6'>
          <div className="my-3 secondary-title">
              <span className="me-3">
                <i className="bi bi-pie-chart"></i>
              </span>
              <div className='float-end' >
                <span className='linkblue mx-2' ><span className='mx-1' ><i className="bi bi-record-circle-fill"></i> </span>view statement</span>
                <span className='linkblue' ><span className='mx-1'><i className="bi bi-info-circle"></i> </span>Help</span>
              </div>
              <span>Equity</span>
            </div>
            <div className='p-3 border'>
            <table className="table table-hover table-borderless">

  <tbody>
    <tr>
     
      <td className='opacity75 p-3'>Available margin</td>
      <td className='bigvalue2 text-end '>0.00</td>
   
    </tr>
    <tr>
      
      <td className='opacity75 p-3'>Used margin</td>
      <td className='bigvalue2 text-end '>0.00</td>
      
    </tr>
    <tr className='border-bottom'>
     
      <td className='opacity75 p-3'>Available cash</td>
      <td className='bigvalue2 text-end '>0.00</td>
      
    </tr>

    <tr>
      <td className='opacity75 p-2' >Opening balance</td>
      <td className='text-end  p-3'>0.00</td>
    </tr>

    <tr>
      <td className='opacity75 p-2' >Payin</td>
      <td className='text-end  p-3'>0.00</td>
    </tr>


    <tr>
      <td className='opacity75 p-2' >Payout</td>
      <td className='text-end  p-3'>0.00</td>
    </tr>
    
    <tr>
      <td className='opacity75 p-2' >SPAN</td>
      <td className='text-end  p-3'>0.00</td>
    </tr>
    
    <tr>
      <td className='opacity75 p-2' >Delivery margin</td>
      <td className='text-end  p-3'>0.00</td>
    </tr>    

    
    <tr>
      <td className='opacity75 p-2' >Exposure</td>
      <td className='text-end  p-3'>0.00</td>
    </tr>
    
    <tr className='border-bottom'>
      <td className='opacity75 p-2' >Options premium</td>
      <td className='text-end  p-3'>0.00</td>
    </tr>
    
    <tr>
      <td className='opacity75 p-2' >Collateral (Liquid funds)</td>
      <td className='text-end  p-3'>0.00</td>
    </tr>
    
    <tr>
      <td className='opacity75 p-2' >Collateral (Equity)</td>
      <td className='text-end  p-3'>0.00</td>
    </tr>
    
    <tr>
      <td className='opacity75 p-2' >Total collateral</td>
      <td className='text-end  p-3'>0.00</td>
    </tr>
    
    
    
  </tbody>
</table>
            </div>
            
          </div>
          <div className='col-6' >
          <div className="my-3 secondary-title">
              <span className="me-3">
                <i className="bi bi-droplet"></i>
              </span>
              <span>Commodity</span>
              <div className='float-end' >
                <span className='linkblue mx-2' ><span className='mx-1' ><i className="bi bi-record-circle-fill"></i> </span>view statement</span>
                <span className='linkblue' ><span className='mx-1'><i className="bi bi-info-circle"></i> </span>Help</span>
              </div>
            </div>
            <div className='p-3 border'>
            <table className="table table-hover table-borderless">

  <tbody>
    <tr>
     
      <td className='opacity75 p-3'>Available margin</td>
      <td className='bigvalue2 text-end '>0.00</td>
   
    </tr>
    <tr>
      
      <td className='opacity75 p-3'>Used margin</td>
      <td className='bigvalue2 text-end '>0.00</td>
      
    </tr>
    <tr className='border-bottom'>
     
      <td className='opacity75 p-3'>Available cash</td>
      <td className='bigvalue2 text-end '>0.00</td>
      
    </tr>

    <tr>
      <td className='opacity75 p-2' >Opening balance</td>
      <td className='text-end  p-3'>0.00</td>
    </tr>

    <tr>
      <td className='opacity75 p-2' >Payin</td>
      <td className='text-end  p-3'>0.00</td>
    </tr>


    <tr>
      <td className='opacity75 p-2' >Payout</td>
      <td className='text-end  p-3'>0.00</td>
    </tr>
    
    <tr>
      <td className='opacity75 p-2' >SPAN</td>
      <td className='text-end  p-3'>0.00</td>
    </tr>
    
    <tr>
      <td className='opacity75 p-2' >Delivery margin</td>
      <td className='text-end  p-3'>0.00</td>
    </tr>    

    
    <tr>
      <td className='opacity75 p-2' >Exposure</td>
      <td className='text-end  p-3'>0.00</td>
    </tr>
    
    <tr >
      <td className='opacity75 p-2' >Options premium</td>
      <td className='text-end  p-3'>0.00</td>
    </tr>
    
    
    
    
    
  </tbody>
</table>
            </div>
        
          </div>
           </div>
      </div>
      
      
      </div>
  )
}

export default Funds