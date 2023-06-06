import React from 'react'

function Gtt_modal(props) {
  return (
    <>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Launch demo modal
    </button>
    
    
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="p-3 border-bottom ">
          <div className='row '>
            <div className='col-8 page-title-small  '>NIFTY JUN 18600 CE NFO 221.85</div>
            <div className='col-4 text-end'>
              <img
                src="https://kite.zerodha.com/static/images/gtt-logo.svg"
                className=" w-25   "
              /></div>
          </div>
          
          </div>
          <div class="modal-body bg-light">
           <div className='row border-bottom'>
            <div className='col-4'>Transaction type
            <div className='d-flex'>
            <div className="d-flex align-items-center me-2">
                <input
                  className="me-1"
                  type="radio"
                  value="market"
                  name="market_limit"
                  // onChange={()=>setform({...form,market_limit:'market',sl:''})}
                  // checked={form.market_limit=='market'}
                />
                Buy
              </div>
              <div className="d-flex align-items-center me-2">
                <input
                  className="me-1"
                  type="radio"
                  value="market"
                  name="market_limit"
                  // onChange={()=>setform({...form,market_limit:'market',sl:''})}
                  // checked={form.market_limit=='market'}
                />
                Sell
              </div>  
              </div>
            
            
            </div>
            <div className='col-8'>Trigger type
            
            <div className='d-flex'>
            <div className="d-flex align-items-center me-2">
                <input
                  className="me-1"
                  type="radio"
                  value="market"
                  name="market_limit"
                  // onChange={()=>setform({...form,market_limit:'market',sl:''})}
                  // checked={form.market_limit=='market'}
                />
                Single
              </div>
              <div className="d-flex align-items-center me-2">
                <input
                  className="me-1"
                  type="radio"
                  value="market"
                  name="market_limit"
                  // onChange={()=>setform({...form,market_limit:'market',sl:''})}
                  // checked={form.market_limit=='market'}
                />
                OCO
              </div>  
              </div>
              <div>
                <p>The order is placed when the Last Traded Price (LTP) crosses the trigger price. Can be used to enter or exit a position.</p>
              </div>
           
            
            
            
            </div>
           </div>
           <div className='row'>
            <div className='col-3'>
              <div><input type='number' className='w-75'/></div>
              <div className='d-flex'><input type='number' className='w-25 h-25'/><span>% of LTP</span></div>
            </div>
            <div className='col-3'>Place oreder</div>
            <div className='col-6'>
              <div className='row '>
                <div className='d-flex justify-content-between'>
              <div className="d-flex align-items-center me-2">
                <input
                  className="me-1"
                  type="radio"
                  value="market"
                  name="market_limit"
                  // onChange={()=>setform({...form,market_limit:'market',sl:''})}
                  // checked={form.market_limit=='market'}
                />
                NRML
              </div>  
              <div className="d-flex align-items-center me-2">
                <input
                  className="me-1"
                  type="radio"
                  value="market"
                  name="market_limit"
                  // onChange={()=>setform({...form,market_limit:'market',sl:''})}
                  // checked={form.market_limit=='market'}
                />
                LIMIT
              </div>  

              </div>
              </div>
              <div className='row'>
                <div className='d-flex'>
                <div ><input type='number' className='w-75'/></div>
                <div className='text-end' ><input type='number' className='w-75'/></div>
                </div>
              </div>
            </div>
           </div>
          </div>
          <div class="p-3 border-top  ">
            <div className='row'>
              <div className='col-7'>
              By placing, I agree to the terms and accept that trigger executions are not guaranteed. This trigger expires on 2024-06-06.
              </div>
              <div className='col-5'>
            <button type="button" class="btn btn-primary">place</button>
            <button type="button" class="btn btn-secondary mx-2" data-bs-dismiss="modal">Cancel</button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    
    
    </>
  )
}

export default Gtt_modal