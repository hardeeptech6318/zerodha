import React,{useState} from 'react'

function Createorder() {
  const [value, setvalue] = useState("regular");
  const [hide, sethide] = useState(true);
 
const checkbox= (e)=>{
  setvalue(e.target.value)
  console.log(e.target.value);

}

const onChangeValue = (e)=>{
  console.log(e.target.value);
}

  return (
    <>
    
    
<div className=' border '

style={{width:"600px",position:"fixed",    top:"0px",
bottom: "auto",
left: "640px",borderRadius: "3px 3px 0 0",zIndex:"1",backgroundColor:"#f9f9f9"}} >

    <div className='container '>
        <div className='row py-3 bg-primary text-white border3 '>
          <div className='col-6 fw-bold'>Buy TORNTPOWER <small >NSE</small> x 1 Qty</div>
          <div className='col-6 '>
            <div class="form-check form-switch form-check-reverse  ">
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
            </div>
          </div>
          <div className='col-6 d-flex modal_order '>
          <div className='d-flex align-items-center me-2' ><input className='me-1' type="radio" value="Female" name="gender" />BSE: ₹252.85</div>
          <div className='d-flex align-items-center ms-5 me-2 ' ><input className='me-1' type="radio" value="Female" name="gender" />NSE: ₹252.75</div>
          </div>   
        </div>
    

    </div>
    <div className='container m-0 p-0 modal_order'>
      <div className='row  m-0 p-0  '>
        <div className='col p-0 m-0 '>
          <div className='d-flex  order_content'  onChange={(e)=>checkbox(e)}>
          <div className='px-2 py-1'>
            <input class="form-check-input d-none" type="radio" name="form" id="regular" value="regular"/>
            <label class={value=="regular"?"form-check-label click lighttext order_header checked":"form-check-label click lighttext order_header "}  for="regular">Regular</label>
          </div>
          <div className='px-2 py-1'>
            <input class="form-check-input d-none" type="radio" name="form" id="cover" value="cover"/>
            <label class={value=="cover"?"form-check-label click lighttext order_header checked ":"form-check-label click lighttext order_header"}  for="cover">Cover</label>
          </div>
          <div className='px-2 py-1'>
            <input class="form-check-input d-none" type="radio" name="form" id="amo" value="amo"/>
            <label class={value=="amo"?"form-check-label click lighttext order_header checked":"form-check-label click lighttext order_header"}  for="amo">AMO</label>
          </div>
          <div className='px-2 py-1'>
            <input class="form-check-input d-none" type="radio" name="form" id="iceberg" value="iceberg"/>
            <label class={value=="iceberg"?"form-check-label click lighttext order_header checked":"form-check-label click lighttext order_header"}  for="iceberg">Iceberg</label>
          </div>
          </div>
        </div>
      </div>
    </div>

    <div className='container modal_order p-3 pb-0 bg-white'>
        
        <div className='row  '>
          <div className='col-5'>
            
            <div className='d-flex align-items-center me-2' ><input className='me-1' type="radio" value="Female" name="gender" />Intraday <span className='lighttext' >MIS</span></div>
          </div>
          <div className='col-5'>
            
            <div className='d-flex align-items-center me-2' ><input className='me-1' type="radio" value="Female" name="gender" />Longterm <span className='lighttext' >CNC</span></div>
          </div>
        </div>

        <div className='row mt-4'>
          <div className='col-4 position-relative'>
            <label className='position-absolute label_position' >Qty.</label>
            <input type='number' className='biginput'/>
          </div>
          <div className='col-4 position-relative'>
          <label className='position-absolute label_position' >Price</label>
            <input type='number' className='biginput'/>
          </div>
          <div className='col-4 position-relative '>
          <label className='position-absolute label_position ' >Trigger price</label>
            <input type='number' className='biginput'/>
            </div>
        </div>

        <div className='row mt-2' >
          <div className='col-4'>
          </div>
          <div className='col-4 d-flex justify-content-start'>
          <div className='d-flex align-items-center me-2' ><input className='me-1' type="radio" value="Female" name="gender" />Market</div>
        <div className='d-flex align-items-center' ><input className='me-1' type="radio" value="Male" name="gender" /> Limit</div>
          </div>
          <div className='col-4 d-flex justify-content-end'>
          
        <div className='d-flex align-items-center me-2' ><input className='me-1' type="radio" value="Female" name="gender" /> SL-M</div>
        <div className='d-flex align-items-center' ><input className='me-1' type="radio" value="Male" name="gender" /> SL</div>
        
      
          </div>
        </div>

        <div className='row'>
          <div className='col-4 position-relative '>
            <div className='diablebg'>
          <label className='position-absolute label_position' >Number of legs</label>
            <input type='number' disabled className='biginput'/>
            </div>
            <div className='lighttext mt-2'>1 qty. per leg</div>
            
          </div>
        </div>

        <div className='row my-3 '>
          <div className='col text-end '>
          <a className='order_link  click' onClick={()=>sethide(!hide)}>
          <span>{hide?'Show option':'Hide option'}</span><span className='ms-2'>{hide?<i class="bi bi-chevron-down"></i>:<i class="bi bi-chevron-up"></i>}</span>
          </a>
          </div>
          
        </div>

        <div className='row my-3 ' style={{display:hide?'none':'flex'}}>
          <div className='col-4'>
            <div className='d-flex flex-column' onChange={(e)=>onChangeValue(e)}>
            <label>Validity</label>
            <div className='mt-1'><input type="radio" value="Male" name="gender" /> Day</div>
            <div className='mt-1'><input type="radio" value="Female" name="gender" /> Immediate <span className='lighttext'>IOC</span></div>
            <div className='mt-1'><input type="radio" value="Other" name="gender" /> Minutes</div>
          </div>
          </div>
          <div className='col-4'>
          <select className='order_select'>
  <option  selected>1 minutes</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>

          </div>
          <div className='col-4 position-relative'>
            <label className='position-absolute label_position ' >Disclosed qty.</label>
            <input type='number' className='biginput'/>
          </div>
        </div>

       
<div className='row border-top border-bottom py-1'>
  <div className='col-1 p-2'><img src='https://kite.zerodha.com/static/images/gtt-logo.svg' className='h-100 w-100' /></div>
  <div className='col-4 d-flex align-items-center'>
  <div className='d-flex'><input type="checkbox" className='  me-1' /> <span>Stoploss</span></div>
  <div className='lighttext' ><input type='number' className='smallinput w-50 ms-2' />%</div>
  
  
  

  </div>
  <div className='col-4 d-flex align-items-center'>
  <div className='d-flex'><input type="checkbox" className='  me-1' /> <span>target</span></div>
  <div className='lighttext' ><input type='number' className='smallinput w-50 ms-2' />%</div>
  </div>
  <div className='col-2'>Learn more</div>
</div>

    
    </div>

    <div className='row py-3 modal_order align-items-center px-3'>
          <div className='col-6'>Margin <span className='text-primary'>₹2,210.00</span> (5x) Charges <span className='text-primary'>₹4.35</span> </div>
          <div className='col-6 text-end'>
          <button type="button" class="btn btn-primary px-4 py-2  ">Buy</button>
          <button type="button" class="btn btn-outline-secondary py-2 ms-2 ">Cancel</button>
          </div>

        </div>

</div>
    </>
  )
}

export default Createorder