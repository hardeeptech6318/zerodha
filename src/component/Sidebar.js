
import React   from 'react'


function Sidebar() {

 
  const showmarketdepth =(item,i)=>{
    
    let id = document.getElementsByClassName(`showmarketdepth${i}`)[0].style.display;
    console.log(id);
    if(id=="none"){
      document.getElementsByClassName(`showmarketdepth${i}`)[0].style.display="block"
    }else{
      document.getElementsByClassName(`showmarketdepth${i}`)[0].style.display="none"
    }
 }

let data =   
  
 
      
         [
            {
                "id": 5236490989,
                "weight": 1,
                "tradingsymbol": "TORNTPOWER",
                "instrument_token": 3529217,
                "segment": "NSE",
                "exchange": "NSE",
                "expiry": ""
            },
            {
                "id": 5236490590,
                "weight": 2,
                "tradingsymbol": "TATAPOWER",
                "instrument_token": 877057,
                "segment": "NSE",
                "exchange": "NSE",
                "expiry": ""
            },
            {
                "id": 5236494947,
                "weight": 3,
                "tradingsymbol": "JSWENERGY",
                "instrument_token": 4574465,
                "segment": "NSE",
                "exchange": "NSE",
                "expiry": ""
            },
            {
                "id": 5262175391,
                "weight": 4,
                "tradingsymbol": "INFY",
                "instrument_token": 408065,
                "segment": "NSE",
                "exchange": "NSE",
                "expiry": ""
            },
            {
                "id": 5471503811,
                "weight": 5,
                "tradingsymbol": "INDUSINDBK",
                "instrument_token": 1346049,
                "segment": "NSE",
                "exchange": "NSE",
                "expiry": ""
            }
        ]
   
const onleave=(item,i)=>{
  let id = document.getElementsByClassName(`hoverbutton${i}`);
  id[0].classList.add("hidemenubutton");
}
        
 const onenter=(item,i)=>{
  let id = document.getElementsByClassName(`hoverbutton${i}`);
  id[0].classList.remove("hidemenubutton");
 }


  return (
    <div className='m-0 p-0 sidebartextsize shadow-sm '  >
      <div className=' d-flex w-100'>
      <label className="searchicon  p-3  " ><i className=" bi bi-search"></i></label>
  <input className="sidebarsearch " placeholder="Search eg:infy,bse,nifty fut, nifty weekly,gold mcx" type="text" />
  <div>
   
  </div>

      </div>
       
       <div >
       {data.map((ele,i)=>{
      
      
      return<>
      <div key={i} onMouseLeave={()=>onleave(ele,i)}  onMouseEnter={()=>onenter(ele,i)} className={`sidebardata${i} sidebarhover   position-relative d-flex justify-content-between  padding12 `} >
        
        <div >{ele.tradingsymbol}</div>
        <div className='d-flex  '>
          <div>
            <div className='opacity75'>
              <span className=' opacity65 mx-3'>-2.35</span>
              <span  >-0.44<span>%</span></span>
            </div>
          </div>
          <div> 
            <span className='mx-2'><i class="bi bi-chevron-down"></i></span>
            <span className='ms-4 me-1'>529.6</span>
          </div>
        </div>
        <div className={` hoverbutton${i} hidemenubutton end-0 top-8  showmenu   position-absolute`}>
            <button className=' hoverbuttondisign mx-1 bg-primary border-primary text-white' style={{backgroundColor:"#4184f3"}} >B</button>
            <button className='hoverbuttondisign bg-danger text-white border-danger ' >S</button>
            <button className='hoverbuttondisign bg-white  mx-1' onClick={()=>showmarketdepth(ele,i)}  ><i class="bi bi-text-center"></i></button>
            <button className='hoverbuttondisign bg-white ' ><i class="bi bi-graph-up-arrow"></i></button>
            <button className='hoverbuttondisign bg-white mx-1' ><i class="bi bi-trash3"></i></button>
            <button className='hoverbuttondisign bg-white  mx-1' ><i class="bi bi-three-dots"></i></button>
            
        </div>

       
      </div>
      <div className={`showmarketdepth${i}`} style={{display:"none"}} >
          {ele.tradingsymbol}
        </div>
      </>
    })}
       </div>
    </div>
  )
}

export default Sidebar