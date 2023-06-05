import React, { useEffect, useState } from "react";

function Createorder() {
  
  const [hide, sethide] = useState(true);
  const [toggle, settoggle] = useState(true);
  const [tags, settags] = useState(false);
  
  

  const[form,setform]=useState({
    toggle:toggle?'buy':'sell',
    order_type:'regular',
    exchange:'NSE',
    intra_long:'longterm',
    quantity:0,
    price:0,
    trigger_price:0,
    market_limit:'market',
    sl:"",
    legs:0,
    validity:'day',
    minutes:"0",
    disclose_qty:0,
    stoploss:false,
    stoploss_percent:0,
    target:false,
    target_percent:0
})

  
  

  useEffect(() => {
    
    
    console.log(form);
  }, [form]);

  return (
    <>
    
      <div
        className=" border shadow-sm "
        style={{
          position: "fixed",
          top: "10%",
          bottom: "auto",
          left: "auto",
          right:"25%",
          borderRadius: "3px 3px 0 0",
          zIndex: "1",
          backgroundColor: "#f9f9f9",
          width:tags?"725px":"600px"
        }}
      >
         {/*######################## header ############################################* */}
        <div className="container " style={tags?{width:"725px"}:{width:"600px"}}>
         
          <div
            className={
              toggle
                ? "row py-3 bg-primary text-white"
                : "row py-3 bg-red text-white"
            }
          >
            <div className="col-6 fw-bold">
              Buy TORNTPOWER <small>NSE</small> x 1 Qty
            </div>
            <div className="col-6 ">
              <div class="form-check form-switch form-check-reverse  ">
                <input
                  class="form-check-input"
                  value="buy"
                  onChange={(e) => settoggle(!toggle)}
                  type="checkbox"
                  role="switch"
                />
              </div>
            </div>
            <div className="col-6 d-flex modal_order ">
              <div className="d-flex align-items-center me-2">
                <input
                  onChange={(e) => {
                    setform({...form,exchange:'BSE',order_type:form.order_type==='cover'?'regular':form.order_type});
                  }}
                  checked={form.exchange == "BSE"}
                  className="me-1"
                  type="radio"
                  value="BSE"
                  name="exchange"
                />
                BSE: ₹252.85
              </div>
              <div className="d-flex align-items-center ms-5 me-2 ">
                <input
                  onChange={(e) => {
                    setform({...form,exchange:'NSE'});
                  }}
                  className="me-1"
                  type="radio"
                  value="NSE"
                  name="exchange"
                  checked={form.exchange == "NSE"}
                />
                NSE: ₹252.75
              </div>
            </div>
          </div>
        </div>
        {/*###################### body ######################################################* */}

<div className="d-flex">
  <div>
     {/*------- sub heading--------* */}
     <div className="container m-0 p-0 modal_order">
          <div className="row  m-0 p-0  ">
            <div className="col p-0 m-0 ">
              <div
                className="d-flex  order_content justify-content-between align-items-center"
                
              >
                <div className="d-flex ">
                <div className="">
                  <input
                    class="form-check-input d-none"
                    type="radio"
                    name="form"
                    id="regular"
                    value="regular"
                    checked={form.order_type=='regular'}
                    onChange={(e) => setform({...form,order_type:e.target.value})}
                  />
                  <label
                    class={
                      form.order_type == "regular"
                        ? "form-check-label click lighttext order_header checked"
                        : "form-check-label click lighttext order_header "
                    }
                    for="regular"
                  >
                    Regular
                  </label>
                </div>
                {form.exchange==='NSE'?<div className="">
                  <input
                    class="form-check-input d-none"
                    type="radio"
                    name="form"
                    id="cover"
                    value="cover"
                    checked={form.order_type=='cover'}
                    onChange={(e) => setform({...form,order_type:e.target.value})}
                  />
                  <label
                    class={
                      form.order_type == "cover"
                        ? "form-check-label click lighttext order_header checked "
                        : "form-check-label click lighttext order_header"
                    }
                    for="cover"
                  >
                    Cover
                  </label>
                </div>:null}
                <div className="  ">
                  <input
                    class="form-check-input d-none"
                    type="radio"
                    name="form"
                    id="amo"
                    value="amo"
                    checked={form.order_type=='amo'}
                    onChange={(e) => setform({...form,order_type:e.target.value})}
                  />
                  <label
                    class={
                      form.order_type == "amo"
                        ? "form-check-label click lighttext order_header checked"
                        : "form-check-label click lighttext order_header"
                    }
                    for="amo"
                  >
                    AMO
                  </label>
                </div>
                <div className="">
                  <input
                    class="form-check-input d-none"
                    type="radio"
                    name="form"
                    id="iceberg"
                    value="iceberg"
                    checked={form.order_type=='iceberg'}
                    onChange={(e) => setform({...form,order_type:e.target.value})}
                  />
                  <label
                    class={
                      form.order_type== "iceberg"
                        ? "form-check-label click lighttext order_header checked"
                        : "form-check-label click lighttext order_header"
                    }
                    for="iceberg"
                  >
                    Iceberg
                  </label>
                </div>
                </div>
                <div><a onClick={()=>settags(!tags)} className=" click order_link p-3" >tags</a></div>
              </div>
            
            </div>
            
          </div>
        </div>

        {/*------------------------------------------------------------------------- */}

        <div className="container modal_order p-3 pb-0 bg-white">
          {/*-------------- order type -----------------------* */}
          <div className="row  ">
            <div className="col-5">
              <div className="d-flex align-items-center me-2">
                <input
                  className="me-1"
                  type="radio"
                  value="intraday"
                  name="order"
                  checked={form.intra_long=='intraday'}
                  onChange={()=>setform({...form,intra_long:"intraday"})}
                />
                Intraday <span className="lighttext">MIS</span>
              </div>
            </div>
            <div className="col-5">
              <div className="d-flex align-items-center me-2">
                <input
                  className="me-1"
                  type="radio"
                  value="longterm"
                  name="order"
                  checked={form.intra_long=="longterm"}
                  onChange={()=>setform({...form,intra_long:"longterm"})}
                />
                Longterm <span className="lighttext">CNC</span>
              </div>
            </div>
          </div>

          {/*-------------- price input ---------------------------- */}

          <div className="row mt-4">
            <div className="col-4 position-relative">
              <label className="position-absolute label_position ">Qty.</label>
              <input type="number" className="biginput" onChange={(e)=>setform({...form,quantity:e.target.value})} />
            </div>
            <div className="col-4 position-relative">
              <label className="position-absolute label_position bg-white px-1">Price</label>
              <input type="number" className={form.market_limit!=='limit' && form.sl!='SL'?"biginput diablebg":"biginput "} disabled={form.market_limit!=='limit' && form.sl!='SL'} onChange={(e)=>setform({...form,price:e.target.value})} />
            </div>
            <div className="col-4 position-relative ">
              <label className="position-absolute label_position ">
                {form.order_type==='cover'?'Stoploss trigger':'Trigger price'}
              </label>
              <input disabled={form.sl==='SL' ||form.sl==='SL-M' || form.order_type==='cover' ?false:true} type="number" className={form.sl==='SL' ||form.sl==='SL-M' || form.order_type==='cover' ?"biginput ":"biginput diablebg"} onChange={(e)=>setform({...form,trigger_price:e.target.value})} />
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-4"></div>
            <div className="col-4 d-flex justify-content-start">
              <div className="d-flex align-items-center me-2">
                <input
                  className="me-1"
                  type="radio"
                  value="market"
                  name="market_limit"
                  onChange={()=>setform({...form,market_limit:'market',sl:''})}
                  checked={form.market_limit=='market'}
                />
                Market
              </div>
              <div className="d-flex align-items-center">
                <input
                  className="me-1"
                  type="radio"
                  value="limit"
                  name="market_limit"
                  checked={form.market_limit=='limit'}
                  onChange={()=>setform({...form,market_limit:'limit',sl:''})}
                />
                Limit
              </div>
            </div>
            <div className="col-4 d-flex justify-content-end">
              <div className="d-flex align-items-center me-2">
                <input
                disabled={form.order_type==='cover'}
                  className="me-1"
                  type="radio"
                  value="SL-M"
                  name="sl"
                  onChange={()=>setform({...form,sl:'SL-M',market_limit:''})}
                  checked={form.sl=='SL-M'}
                />  SL-M
              </div>
              <div className="d-flex align-items-center">
                <input
                  className="me-1"
                  disabled={form.order_type==='cover'}
                  type="radio"
                  value="SL"
                  name="sl"
                  checked={form.sl=='SL'}
                  onChange={()=>setform({...form,sl:'SL',market_limit:''})}
                />  SL
              </div>
            </div>
          </div>

         {form.order_type==='iceberg'? <div className="row">
            <div className="col-4 position-relative ">
              <div >
                <label className="position-absolute label_position">
                  Number of legs
                </label>
                <input type="number" className="biginput"  onChange={(e)=>setform({...form,legs:e.target.value})} />
              </div>
              <div className="lighttext mt-2">1 qty. per leg</div>
            </div>
          </div>:null}
          

          {/*------------------- show hide button---------------* */}

          <div className="row py-3 ">
            <div className="col text-end ">
              <a className="order_link  click" onClick={() => sethide(!hide)}>
                <span>{hide ? "Show option" : "Hide option"}</span>
                <span className="ms-2">
                  {hide ? (
                    <i class="bi bi-chevron-down"></i>
                  ) : (
                    <i class="bi bi-chevron-up"></i>
                  )}
                </span>
              </a>
            </div>
          </div>

          {/* -----------------show hide content -------------------------* */}

          <div
            className="row my-3  "
            style={{ display: hide ? "none" : "flex" }}
          >
            <div className="col-4">
              <div
                className="d-flex flex-column"
                    
              >
                <label>Validity</label>
                <div className="mt-1">
                  <input type="radio"  value="day" name="validity" checked={form.validity=='day'} onChange={(e) => setform({...form,validity:e.target.value})} /> Day
                </div>
                <div className="mt-1">
                  <input type="radio" value="immediate" name="validity" checked={form.validity=='immediate'} onChange={(e) => setform({...form,validity:e.target.value})} /> Immediate
                  <span className="lighttext">IOC</span>
                </div>
                <div className="mt-1">
                  <input type="radio" value="minutes" name="validity" checked={form.validity=='minutes'} onChange={(e) => setform({...form,validity:e.target.value})} /> Minutes
                </div>
              </div>
            </div>
            <div className="col-4">
              <select className= {form.validity==='minutes'?"order_select  ":'order_select diablebg'} disabled={form.validity!=='minutes'}>
                <option selected>1 minutes</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="col-4 position-relative">
              <label className="position-absolute label_position ">
                Disclosed qty.
              </label>
              <input type="number" className={form.validity==='immediate'?"biginput  diablebg":"biginput"} disabled={form.validity==='immediate'} />
            </div>
          </div>

          {/*---------------------- GTT option ---------------------- */}

       {form.intra_long==='longterm'?   <div className="row border-top border-bottom py-1">
            <div className="col-1 p-2">
              <img
                src="https://kite.zerodha.com/static/images/gtt-logo.svg"
                className="h-100 w-100"
              />
            </div>
            <div className="col-4 d-flex align-items-center">
              <div className="d-flex">
                <input type="checkbox" checked={form.stoploss} onChange={(e)=>setform({...form,stoploss:!form.stoploss})} className="  me-1" />
                <span>Stoploss</span>
              </div>
              <div className="lighttext">
                <input type="number" disabled={!form.stoploss} className="smallinput w-50 ms-2" onChange={(e)=>setform({...form,stoploss_percent:e.target.value})} />%
              </div>
            </div>
            <div className="col-4 d-flex align-items-center">
              <div className="d-flex">
                <input  type="checkbox" checked={form.target} onChange={(e)=>setform({...form,target:!form.target})} className="  me-1" /> <span>target</span>
              </div>
              <div className="lighttext">
                <input disabled={!form.target} type="number" className="smallinput w-50 ms-2" onChange={(e)=>setform({...form,stoploss_percent:e.target.value})} />%
              </div>
            </div>
            <div className="col-2">Learn more</div>
          </div>:null}
        </div>

        {/*----------------footer--------------------------- */}

        <div className="row  modal_order align-items-center py-2 px-3">
          <div className="col-6">
            Margin <span className="text-primary">₹2,210.00</span> (5x) Charges
            <span className="text-primary">₹4.35</span> 
          </div>
          <div className="col-6 text-end">
            <button
              type="submit"
              
              class={
                toggle
                  ? "btn btn-primary px-4 py-2 "
                  : "btn  btn-danger bg-red text-white px-4 py-2"
              }
            >
              {toggle ? "Buy" : "Sell"}
            </button>
            <button type="button"  class="btn btn-outline-secondary py-2 ms-2 ">
              Cancel
            </button>
          </div>
        </div>

  </div>{tags?<div className="bg-white border-start" style={{width:"125px"}}>
    fhkjdgfldkkh
  </div>:null}
  
</div>
             </div>
    
    </>
  );
}

export default Createorder;
