
import React ,{useEffect, useState}  from 'react'
import { useGetMarketwatchQuery } from '../features/api/apiSlice'
import { useSelector, useDispatch } from 'react-redux'
import { ordermodal ,buysell} from '../features/api/globalstate'


function Sidebar() {
  
  const dispatch = useDispatch()

  const [page, setpage] = useState({});
  const [pagelength, setpagelength] = useState(0);
  const [data, setdata] = useState([]);

 
 
  const showmarketdepth =(item,i)=>{
    
    let id = document.getElementsByClassName(`showmarketdepth${i}`)[0].style.display;
  
    if(id==="none"){
      document.getElementsByClassName(`showmarketdepth${i}`)[0].style.display="block"
    }else{
      document.getElementsByClassName(`showmarketdepth${i}`)[0].style.display="none"
    }
 }


 const {
  data:marketdata,
  isLoading,
  isSuccess,
  isError,
  error,
  refetch
} = useGetMarketwatchQuery()


useEffect(()=>{
  isLoading ? setdata([]) : setdata(marketdata?.data);
  let length=0

  marketdata?.data.forEach((ele)=>{
   
  length =length+ele.items.length
  
  
  })
  setpagelength(length)
  
  
    for (let i = 0; i < marketdata?.data.length; i++) {
      const element = marketdata?.data[i];
     if(element.items.length>0){
      setpage(element)
      break;
     }
    }

},[data])









   
const onleave=(item,i)=>{
  let id = document.getElementsByClassName(`hoverbutton${i}`);
  id[0].classList.add("hidemenubutton");
}
// document.activeElement === searchInput.current
 const onenter=(item,i)=>{
  let id = document.getElementsByClassName(`hoverbutton${i}`);
  id[0].classList.remove("hidemenubutton");
 }

 const slectedpage =(el)=>{
  setpage(el)
  let id = document.getElementsByClassName('showallmarketdepth')[0]
  if(id){
    document.getElementsByClassName('showallmarketdepth')[0].style.display='none'
  }
  
 }
 const [dragItemIndex, setDragItemIndex] = useState();
 const [dragOverItemIndex, setDragOverItemIndex] = useState();

   

  const handleDragStart = index => {
    setDragItemIndex(index)
  };

  const handleDragOver = event => {
    event.preventDefault();
  }

  const handleDrop = (index) => {

    
    
    const _sports = [...page.items];
    
    const dragItem = _sports.splice(dragItemIndex, 1);
    
    
     _sports.splice(dragOverItemIndex, 0, dragItem[0]);
    
    setpage({id: 430051044, name: 'today', items:_sports});
    
  }

  const handleDragEnter = index => {
    setDragOverItemIndex(index)
  }

  

  const handleDragEnd = event => {
    setDragItemIndex(undefined);
    setDragOverItemIndex(undefined);
  }


  return (
    <div className='m-0 p-0 sidebartextsize  '   >
      <div className='position-relative'>
      <div className='searchsidebar border-bottom d-flex' >
      <label className="searchicon  p-3  " ><i className=" bi bi-search"></i></label>
  <input className="sidebarsearch " placeholder="Search eg:infy,bse,nifty fut, nifty weekly,gold mcx" type="text" />
  <label className='pagelabel' >{page?.items?.length}/{pagelength}</label>
  <div>
  </div>

  

      </div>
      <div className='position-absolute bg-white  w-100' style={{zIndex:"2"}}>
        <ul className='w-100 m-0 p-0'>
          <li className='w-100 d-flex align-items-center justify-content-between p-2 m-0 border-bottom'>
            <span>IDEA</span>
            <span >
              <span className='fsc-6'>VODAFONE IDEA </span>
              <span className='nse'>NSE</span>
            </span>
          </li>
          <li></li>
          <li></li>
          <li></li>

          <li></li>
          <li></li>
          <li></li>

          <li></li>
          <li></li>
          <li></li>
          
        </ul>
      </div>  
      </div>
       <div className='instrument'>
       <div >
       {page.items && page.items.length>0? page.items.map((ele,i)=>{
     
      
      return<>
      <div
       draggable
       onDragStart={() => handleDragStart(i)}
       onDragOver={handleDragOver}
       onDrop={() => handleDrop(i)}
       onDragEnter={() => handleDragEnter(i)}
       onDragEnd={handleDragEnd}
        key={i} onMouseLeave={()=>onleave(ele,i)}  onMouseEnter={()=>onenter(ele,i)}
        
        // className={`sidebardata${i} sidebarhover   position-relative   padding12 `} 
            className={dragOverItemIndex === i ? `list-item next-position sidebardata${i} sidebarhover    position-relative   padding12` : ` sidebardata${i} sidebarhover   position-relative   padding12 list-item`}
            >
        
        <div className='d-flex d-flex justify-content-between'>
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
        <div key={i} className={` hoverbutton${i}  hidemenubutton end-0 top-8  showmenu   position-absolute`}>
            <button className=' hoverbuttondisign mx-1 bg-primary border-primary text-white' style={{backgroundColor:"#4184f3"}} onClick={() => {dispatch(buysell(true));dispatch(ordermodal(true))}} >B</button>
            <button className='hoverbuttondisign  text-white bg-red border-red ' onClick={() => {dispatch(buysell(false));dispatch(ordermodal(true))}} >S</button>
            <button className='hoverbuttondisign bgwhite  mx-1' onClick={()=>showmarketdepth(ele,i)}  ><i className="bi bi-text-center"></i></button>
            <button className='hoverbuttondisign bgwhite ' ><i className="bi bi-graph-up-arrow"></i></button>
            <button className='hoverbuttondisign bgwhite ms-1' ><i className="bi bi-trash3"></i></button>
            <button className='hoverbuttondisign bgwhite  mx-1' ><i className="bi bi-three-dots"></i></button>
            
        </div>
        </div>

        <div   className={`showmarketdepth${i} showallmarketdepth smalltext  `} style={{display:"none"}} >
          <div className='row border-bottom '>
            <div className='col-6'>
            <table className="table-borderless w-100 mb-2">
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
            <table className="table-borderless w-100 ">
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
            <div className='col text-primary py-2'><i className="bi bi-chevron-down"></i>  View 20 depth</div></div>
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

       
      </div>
      
        
        
      </>
    }):<>
    <div className='d-flex justify-content-center align-items-center flex-column pt-4'>
    <div className='text-center' ><img className='w-50' src='./image/marketwatch.png'/></div>
    <div><h2>Nothing here</h2></div>
    <div className='addinstrument' >Use the search bar to add instruments.</div>
    <button className='btn btn-primary my-3 '>Add Instrument</button>
    </div>
    
    </>}
       </div>
       </div>

       <ul className='ul' >
        {data.map((el,i)=>{
          return <li key={i} className={page.name===el.name? 'activepage sidebarpagination pe-auto opacity65':'sidebarpagination pe-auto opacity65'} onClick={()=>slectedpage(el)} >{i+1}</li>
        })}
          <li className='setting'><span className='setting-btn'><i className="bi bi-gear"></i></span></li>
        </ul>
    </div>
  )
}

export default Sidebar