import React from 'react'

function Gttmodal(props) {
  return (
    <>

    
<div class="modal fade" id="gtt" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="p-3 border-bottom ">
          <div className='row '>
            <div className='col-8 page-title-small  '>NIFTY JUN 18600 CE NFO 221.85</div>
            <div className='col-4 text-end'>
              <img
                src="https://kite.zerodha.com/static/images/gtt-logo.svg"
                className=" w-25   "
                alt='gtt'
              /></div>
          </div>
          
          </div>
          <div class="modal-body ">
           <div className='row border-bottom bg-light px-3 py-4'>
            <div className='col-4'>
              <div className='pb-3'>Transaction type</div>
            <div className='d-flex'>
            <div className="d-flex align-items-center me-4">
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
            <div className='col-8'>
              <div className='pb-3'>
              Trigger type
              </div>
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
                <span className='xxlsmall'>The order is placed when the Last Traded Price (LTP) crosses the trigger price. Can be used to enter or exit a position.</span>
              </div>
           
            
            
            
            </div>
           </div> 
           <div className='row px-3 py-4 align-items-end pb-5' >
            
            <div className='col-3 '>
              <div className=' gtt_label'>Stopploss</div>
              <div className='position-relative mt-3'>
              <label className="position-absolute label_position2 ">Trigger price</label>
                <input type='number' className='w-100 input_gtt'/>
                </div>
              <div className='d-flex xxlsmall mt-1 position-absolute'><input type='number' className='w-25 h-25 border  border-0 shadow-sm  '/><span>% of LTP</span></div>
            </div>
            <div className='col-3 xxlsmall py-3 px-5'>Place oreder &rarr;</div>
            <div className='col-6'>
              <div className='row '>
                <div className='d-flex justify-content-between '>
              <div className="d-flex align-items-center ms-2 modal_order">
                <input
                  className="me-1 "
                  type="radio"
                  value="market"
                  name="market_limit"
                  // onChange={()=>setform({...form,market_limit:'market',sl:''})}
                  // checked={form.market_limit=='market'}
                />
                CNC
              </div>  
              <div className="d-flex align-items-center  modal_order">
                <input
                  className="me-1 "
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
              <div className='row mt-3 '>
                <div className='d-flex'>
                <div className='position-relative px-2' >
                <label className="position-absolute label_position2 ms-2 ">Qty.</label>
                <input type='number' className='w-100 input_gtt'/>
                  </div>
                <div className='text-end position-relative px-2' >
                <label className="position-absolute label_position2 ms-2 ">Price</label>
                <input type='number' className='w-100 input_gtt'/>
                  </div>
                </div>
              </div>
            </div>
           </div>

           <div className='row px-3 py-4 align-items-end border-top pb-4'>
            
            <div className='col-3 '>
              <div className=' gtt_label'>Stopploss</div>
              <div className='position-relative mt-3'>
              <label className="position-absolute label_position2 ">Trigger price</label>
                <input type='number' className='w-100 input_gtt'/>
                </div>
              <div className='d-flex xxlsmall mt-1 position-absolute'><input type='number' className='w-25 h-25 border  border-0 shadow-sm  '/><span>% of LTP</span></div>
            </div>
            <div className='col-3 xxlsmall py-3 px-5'>Place oreder &rarr;</div>
            <div className='col-6'>
              <div className='row '>
                <div className='d-flex justify-content-between '>
              <div className="d-flex align-items-center ms-2 modal_order">
                <input
                  className="me-1 "
                  type="radio"
                  value="market"
                  name="market_limit"
                  // onChange={()=>setform({...form,market_limit:'market',sl:''})}
                  // checked={form.market_limit=='market'}
                />
                CNC
              </div>  
              <div className="d-flex align-items-center  modal_order">
                <input
                  className="me-1 "
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
              <div className='row mt-3 '>
                <div className='d-flex'>
                <div className='position-relative px-2' >
                <label className="position-absolute label_position2 ms-2 ">Qty.</label>
                <input type='number' className='w-100 input_gtt'/>
                  </div>
                <div className='text-end position-relative px-2' >
                <label className="position-absolute label_position2 ms-2 ">Price</label>
                <input type='number' className='w-100 input_gtt'/>
                  </div>
                </div>
              </div>
            </div>
           </div> 


          </div>
          <div class="p-3 border-top  ">
            <div className='row'>
              <div className='col-7 xxlsmall '>
              By placing, I agree to the terms and accept that trigger executions are not guaranteed. This trigger expires on 2024-06-06.
              </div>
              <div className='col-5 text-end'>
            <button type="button" class="btn btn-primary px-3 py-2 ">Place</button>
            <button type="button" data-bs-dismiss="modal"  class="btn btn-outline-secondary py-2 ms-2 ">
              Cancel
            </button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    
    
    </>
  )
}

export default Gttmodal