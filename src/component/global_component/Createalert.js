import React from "react";

function Createalert() {
  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#alert"
      >
        Launch demo modal
      </button>

      <div
        class="modal fade"
        id="alert"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content" >
            <div class="modal-header justify-content-between p-3">
              <div className="fs-5 fw-bold">New alert</div>
              <div className="text-primary"><a href="/"><span className="me-2"><i class="bi bi-info-circle"></i></span>Help</a></div>
            </div>
            <div class="modal-body" style={{padding:"25px"}}>
              <div className="pb-3 ">
                <input
                  type="text"
                  className="form-control padding15"
                  placeholder="Alert name"
                />
              </div>
              <div className="row py-3">
                <div className="col-6">
                  <label>Propert</label>
                  <select
                    class="form-select padding15 "
                    aria-label="Default select example"
                    style={{fontSize:"14px"}}
                  >
                   <option value="LastTradedPrice" selected>Last Traded Price</option>
  <option value="HighPrice">High Price</option>
   <option value="LowPrice">Low Price</option>
    <option value="OpenPrice">Open Price</option>
     <option value="ClosePrice">Close Price</option>
      <option value="DayChange">Day Change</option>
       <option value="DayChangePercent">Day Change Percent</option>
        <option value="IntraDayChange">Intra Day Change</option>
         <option value="IntraDayChangePercent">Intra Day Change Percent</option> 
         <option value="LastTradedQuantity">Last Traded Quantity</option>
          <option value="AverageTradePrice">Average Trade Price</option>
           <option value="VolumeTraded">Volume Traded</option>
            <option value="TotalBuyQuantity">Total Buy Quantity</option>
             <option value="TotalSellQuantity">Total Sell Quantity</option>
              <option value="OpenInterest">Open Interest</option>
               <option value="OpenInterestDayHigh">Open Interest Day High</option>
                <option value="OpenInterestDayLow">Open Interest Day Low</option>
 
                  </select>
                </div>
                <div className="col-6">
                  <label>Of</label>

                
                  <div className='border d-flex' >
      <label className=" ps-2 py-2   " ><i className=" bi bi-search"></i></label>
  <input className="sidebarsearch padding15  " placeholder="Search eg:infy,bse,nifty fut, nifty weekly,gold mcx" type="text" />
  
  

      </div> 

                </div>
              </div>

              <div className="row py-3">
                <div className="col-6">
                  <select
                    class="form-select padding15 "
                    aria-label="Default select example"
                    style={{fontSize:"14px"}}
                  >
                   <option value=">">Greater than (&gt;)</option> 
                   <option value=">=">Greater than or equal to (&gt;=)</option>
                    <option value="<">Less than (&lt;)</option>
                    <option value="<=">Less than or equal to (&lt;=)</option>
                     <option value="==">Equal to (==)</option></select>

                  
                </div>
                <div className="col-6">
                  
                  <div className="d-flex">
                    <div className="d-flex align-items-center me-4">
                      <input
                        className="me-1"
                        type="radio"
                        value="market"
                        name="market_limit"
                        // onChange={()=>setform({...form,market_limit:'market',sl:''})}
                        // checked={form.market_limit=='market'}
                      />
                      Value
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
                      Instrument
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <div className="position-relative mt-3">
                    <label className=" ">
                      Value
                    </label>
                    <input type="number" className="w-100 input_gtt" />
                  </div>
                  <div className="d-flex xxlsmall mt-1 position-absolute">
                    <input
                      type="number"
                      className="w-25 h-25 border  border-0 shadow-sm  "
                    />
                    <span>% of LTP</span>
                  </div>
                </div>
              </div>

              <div className="row pb-3 pt-5">
                <div className="col-6">
                  <label>Propert</label>
                  <select
                    class="form-select padding15 "
                    aria-label="Default select example"
                    style={{fontSize:"14px"}}
                  >
                  <option selected value="LastTradedPrice">Last Traded Price</option>
  <option value="HighPrice">High Price</option>
   <option value="LowPrice">Low Price</option>
    <option value="OpenPrice">Open Price</option>
     <option value="ClosePrice">Close Price</option>
      <option value="DayChange">Day Change</option>
       <option value="DayChangePercent">Day Change Percent</option>
        <option value="IntraDayChange">Intra Day Change</option>
         <option value="IntraDayChangePercent">Intra Day Change Percent</option> 
         <option value="LastTradedQuantity">Last Traded Quantity</option>
          <option value="AverageTradePrice">Average Trade Price</option>
           <option value="VolumeTraded">Volume Traded</option>
            <option value="TotalBuyQuantity">Total Buy Quantity</option>
             <option value="TotalSellQuantity">Total Sell Quantity</option>
              <option value="OpenInterest">Open Interest</option>
               <option value="OpenInterestDayHigh">Open Interest Day High</option>
                <option value="OpenInterestDayLow">Open Interest Day Low</option>
 
                  </select>
                </div>
                <div className="col-6">
                  <label>Of</label>

                  <div className='border d-flex' >
      <label className=" ps-2 py-2   " ><i className=" bi bi-search"></i></label>
  <input className="sidebarsearch padding15  " placeholder="Search eg:infy,bse,nifty fut, nifty weekly,gold mcx" type="text" />
  
  

      </div> 
                </div>
              </div>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-primary py-2 px-3">
                Create
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary py-2 px-3"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Createalert;
