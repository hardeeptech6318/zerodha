
import React ,{useEffect, useState}  from 'react'



function Sidebar() {
  const [page, setpage] = useState({});
  const [pagelength, setpagelength] = useState(0);

 
 
  const showmarketdepth =(item,i)=>{
    
    let id = document.getElementsByClassName(`showmarketdepth${i}`)[0].style.display;
  
    if(id=="none"){
      document.getElementsByClassName(`showmarketdepth${i}`)[0].style.display="block"
    }else{
      document.getElementsByClassName(`showmarketdepth${i}`)[0].style.display="none"
    }
 }

let data =   
[
  {
      "id": 430051044,
      "name": "today",
      "items": [  {
        "id": 5499712579,
        "weight": 8,
        "tradingsymbol": "ADANIGREEN",
        "instrument_token": 912129,
        "segment": "NSE",
        "exchange": "NSE",
        "expiry": ""
    }]
  },
  {
      "id": 430051045,
      "name": "tomorrow",
      "items": [ {
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
    },
    {
        "id": 5499711381,
        "weight": 6,
        "tradingsymbol": "ADANIENT",
        "instrument_token": 6401,
        "segment": "NSE",
        "exchange": "NSE",
        "expiry": ""
    },
    {
        "id": 5499711540,
        "weight": 7,
        "tradingsymbol": "ADANIPOWER",
        "instrument_token": 4451329,
        "segment": "NSE",
        "exchange": "NSE",
        "expiry": ""
    },
    {
        "id": 5499712579,
        "weight": 8,
        "tradingsymbol": "ADANIGREEN",
        "instrument_token": 912129,
        "segment": "NSE",
        "exchange": "NSE",
        "expiry": ""
    },
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
          },
          {
              "id": 5499711381,
              "weight": 6,
              "tradingsymbol": "ADANIENT",
              "instrument_token": 6401,
              "segment": "NSE",
              "exchange": "NSE",
              "expiry": ""
          },
          {
              "id": 5499711540,
              "weight": 7,
              "tradingsymbol": "ADANIPOWER",
              "instrument_token": 4451329,
              "segment": "NSE",
              "exchange": "NSE",
              "expiry": ""
          },
          {
              "id": 5499712579,
              "weight": 8,
              "tradingsymbol": "ADANIGREEN",
              "instrument_token": 912129,
              "segment": "NSE",
              "exchange": "NSE",
              "expiry": ""
          }, {
            "id": 5499711381,
            "weight": 6,
            "tradingsymbol": "ADANIENT",
            "instrument_token": 6401,
            "segment": "NSE",
            "exchange": "NSE",
            "expiry": ""
        },
        {
            "id": 5499711540,
            "weight": 7,
            "tradingsymbol": "ADANIPOWER",
            "instrument_token": 4451329,
            "segment": "NSE",
            "exchange": "NSE",
            "expiry": ""
        },
        {
            "id": 5499712579,
            "weight": 8,
            "tradingsymbol": "ADANIGREEN",
            "instrument_token": 912129,
            "segment": "NSE",
            "exchange": "NSE",
            "expiry": ""
        } 
      ]
  },
  {
      "id": 430051046,
      "name": "bank",
      "items": [  {
        "id": 5499712579,
        "weight": 8,
        "tradingsymbol": "ADANIGREEN",
        "instrument_token": 912129,
        "segment": "NSE",
        "exchange": "NSE",
        "expiry": ""
    }]
  },
  {
      "id": 430051047,
      "name": "long term",
      "items": []
  },
  {
      "id": 430051048,
      "name": "pharma",
      "items": []
  },
  {
      "id": 1434766327,
      "name": "MW 6",
      "items": []
  },
  {
      "id": 1442299913,
      "name": "MW 7",
      "items": []
  }
]


useEffect(()=>{
  let length=0

data.forEach((ele)=>{
 
length =length+ele.items.length


})
setpagelength(length)


  for (let i = 0; i < data.length; i++) {
    const element = data[i];
   if(element.items.length>0){
    setpage(element)
    break;
   }
  }
},[])
   
const onleave=(item,i)=>{
  let id = document.getElementsByClassName(`hoverbutton${i}`);
  id[0].classList.add("hidemenubutton");
}
        
 const onenter=(item,i)=>{
  let id = document.getElementsByClassName(`hoverbutton${i}`);
  id[0].classList.remove("hidemenubutton");
 }

 const slectedpage =(el)=>{
  setpage(el)
 }


  return (
    <div className='m-0 p-0 sidebartextsize  '  >
      <div className='searchsidebar d-flex' >
      <label className="searchicon  p-3  " ><i className=" bi bi-search"></i></label>
  <input className="sidebarsearch " placeholder="Search eg:infy,bse,nifty fut, nifty weekly,gold mcx" type="text" />
  <label className='pagelabel' >{page?.items?.length}/{pagelength}</label>
  <div>
   
  </div>

      </div>  
       <div className='instrument'>
       <div >
       {page.items && page.items.length>0? page.items.map((ele,i)=>{
     
      
      return<>
      <div key={i} onMouseLeave={()=>onleave(ele,i)}  onMouseEnter={()=>onenter(ele,i)} className={`sidebardata${i} sidebarhover   position-relative d-flex justify-content-between  padding12 `} >
        
        <div className='text-success' >{ele.tradingsymbol}</div>
        <div className='d-flex  '>
          <div>
            <div className='opacity75'>
              <span className=' opacity65 mx-3'>-2.35</span>
              <span  >-0.44<span>%</span></span>
            </div>
          </div>
          <div> 
            <span className='mx-2'><i className="bi bi-chevron-down"></i></span>
            <span className='ms-4 me-1 text-danger'>529.6</span>
          </div>
        </div>
        <div key={i} className={` hoverbutton${i} hidemenubutton end-0 top-8  showmenu   position-absolute`}>
            <button className=' hoverbuttondisign mx-1 bg-primary border-primary text-white' style={{backgroundColor:"#4184f3"}} >B</button>
            <button className='hoverbuttondisign orange text-white border-danger ' >S</button>
            <button className='hoverbuttondisign bgwhite  mx-1' onClick={()=>showmarketdepth(ele,i)}  ><i className="bi bi-text-center"></i></button>
            <button className='hoverbuttondisign bgwhite ' ><i className="bi bi-graph-up-arrow"></i></button>
            <button className='hoverbuttondisign bgwhite ms-1' ><i className="bi bi-trash3"></i></button>
            <button className='hoverbuttondisign bgwhite  mx-1' ><i className="bi bi-three-dots"></i></button>
            
        </div>

       
      </div>
      <div   className={`showmarketdepth${i} px-4 smalltext shadow-sm `} style={{display:"none"}} >
          <div className='row border-bottom '>
            <div className='col-6'>
            <table class="table-borderless w-100 mb-2">
  <thead>
    <tr>
      <th scope="col  " className='headerdim text-start px-0'>BID</th>
      <th scope="col  " className='headerdim text-end px-0'>ORDERS</th>
      <th scope="col " className='headerdim text-end px-0'>QTY.</th>
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
          <div className='row text-center'>
            <div className='col text-primary py-2'><i class="bi bi-chevron-down"></i>  View 20 depth</div></div>
          <div className='row border-top py-3 '>
          <div className='row m-0 p-0 '>
            <div className='col-6  '><div className='row  '><div className='col-6  ps-0 lighttext '>Open</div><div className='col-6   text-end'>555.5</div></div></div>
            <div className='col-6 '><div className='row '><div className='col-6   lighttext'>High</div><div className='col-6  pe-0 text-end'>559.5</div></div></div>
          </div>
          <div className='row m-0 p-0'>
          <div className='col-6 '><div className='row'><div className='col-6  ps-0 lighttext '>Low</div><div className='col-6   text-end'>555.5</div></div></div>
          <div className='col-6 '><div className='row'><div className='col-6   lighttext '>Prev. Close</div><div className='col-6  pe-0 text-end'>555.5</div></div></div>
          </div>
          <div className='row m-0 p-0'>
          <div className='col-6 '><div className='row'><div className='col-6  ps-0 lighttext '>volume</div><div className='col-6   text-end'>N/A</div></div></div>
          <div className='col-6 '><div className='row'><div className='col-6   lighttext '>Avg. price</div><div className='col-6  pe-0 text-end'>N/A</div></div></div>
          </div>
          <div className='row m-0 p-0'>
          <div className='col-6 '><div className='row'><div className='col-6  ps-0 lighttext '>LTQ</div><div className='col-6   text-end'>N/A</div></div></div>
          <div className='col-6 '><div className='row'><div className='col-3   lighttext '>LTT</div><div className='col pe-0 w-100 text-end'>2023-05-26 15:59:37</div></div></div>
          </div>
          <div className='row m-0 p-0'>
          <div className='col-6 '><div className='row'><div className='col-6  ps-0 lighttext '>Lower circuit</div><div className='col-6   text-end'>555.5</div></div></div>
          <div className='col-6 '><div className='row'><div className='col-7   lighttext '>Upper circuit</div><div className='col-5  pe-0 text-end'>555.5</div></div></div>
          </div>

          </div>
        </div>
        
        
      </>
    }):<>
    <div className='d-flex justify-content-center align-items-center flex-column'>
    <div className='binoculars' ><i  className="bi bi-binoculars "></i></div>
    <div><h2>Nothing here</h2></div>
    <div className='addinstrument' >Use the search bar to add instruments.</div>
    <button className='btn btn-primary my-3 '>Add Instrument</button>
    </div>
    
    </>}
       </div>
       </div>

       <ul >
        {data.map((el,i)=>{
          return <li key={i} className={page.name==el.name? 'activepage sidebarpagination pe-auto opacity65':'sidebarpagination pe-auto opacity65'} onClick={()=>slectedpage(el)} >{i+1}</li>
        })}
          <li className='setting'><span className='setting-btn'><i className="bi bi-gear"></i></span></li>
        </ul>
    </div>
  )
}

export default Sidebar