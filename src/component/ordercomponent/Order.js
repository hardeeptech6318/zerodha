import React ,{useState,useEffect}from 'react'
import Tablesort from '../commonfunction/Tablesort';
import { useGetOrdersQuery,useGetTradesQuery } from "../../features/api/apiSlice";

function Order() {
  const {
    data:orders,
    isLoading,
    isSuccess,
    isError,
    error,
    refetch
  } = useGetOrdersQuery()

  
  const trades_length=(length)=>{
    settrades(length)
  }
  
  
  const [open, setopen] = useState([]);
  const [executed, setexecuted] = useState([]);
  const [showtrades, setshowtrades] = useState(false);
  const [trades, settrades] = useState(0);





  

  useEffect(()=>{
    refetch()
   
    
      let executed=orders?.data?.filter((ele)=>{
        return ele.status==="COMPLETE" || ele.status=== "CANCELLED" || ele.status=== "REJECTED" 
      })
      
    
     setexecuted(executed)

     let open = orders?.data?.filter((ele)=>{
      return ele.status!=="COMPLETE" && ele.status!== "CANCELLED" && ele.status!== "REJECTED"
    })
      

      setopen(open)
    
   
   
  },[orders,showtrades])





  return (
  <div className='allpagepadding' >
    
      <div>

{open?.length>0?<Orderscomponent data={open} name="Open orders" />:null}

{executed?.length>0?<Orderscomponent data={executed} name="Executed orders" />:null}
     
{/*------------------------------ Trades  ------------------------------- */}
<div className='mt-5'>
<div>

          <div className='d-flex justify-content-between  '>
          <div>
          <h3 style={{fontSize:"1.125rem"}} >Trades <button onClick={()=>{setshowtrades(!showtrades);showtrades===true?settrades(0):settrades(trades) } }  className='btn'><i className={trades>0?"bi bi-chevron-up":"bi bi-chevron-down"}></i></button> {trades>0?<>({trades})</>:null}</h3>
          </div> 
         

          {trades>0?   <div className="d-flex align-items-baseline">
          <div>
          <div className="holdingsearch">
          <label className="m-1 mx-2 " ><i className="bi bi-search"></i></label>
          <input className="inputsearch" placeholder="Search" type="text" />
          </div>
          </div>


          <div className="mx-3"><a className="linkblue" href="/"><span className="me-1 fs-10" ><i className="bi bi-record-circle-fill"></i></span>View history</a></div>
          <div><a className="linkblue"   href="/"><span className="me-1 fs-10 " ><i className="bi bi-download"></i></span>Download</a></div>
          </div>:null}
          </div>

        </div>

       {showtrades? <Trades length2={trades_length}/>:null}
       
</div>
           {/*----------------------------   --------------------------------------------- */}
              </div>
  {(open?.length<=0 && executed?.length<=0)? <div className='orderpage d-flex justify-content-center align-items-center flex-column my-5'>
                <div className='orderjournal '>
                <i className="bi bi-journal-bookmark"></i>
                </div>
                <div className=''>You haven't placed any orders today</div>
                <div className='my-4'>
                <button className='btn btn-primary'>Get started</button>        
                </div>
                <div className="mx-3"><a className=" orderhistory " href="/"><span className="me-1 text-primary  " ><i className="bi bi-record-circle-fill"></i></span>View history</a></div>

                </div>
        
        
       :null }
</div>
  )
}

export default Order




function Orderscomponent(props) {

  const [data, setdata] = useState([]);
  useEffect(()=>{
setdata(props?.data)
  },[props])

  return (
    <div>
    <div className='d-flex justify-content-between mt-2 mb-3'>
        <div>
        <h3 style={{fontSize:"1.125rem"}} >{props.name} ({data?.length})</h3>
        </div>  

        <div className="d-flex align-items-baseline">
        <div>
        <div className="holdingsearch">
        <label className="m-1 mx-2 " ><i className="bi bi-search"></i></label>
        <input className="inputsearch" placeholder="Search" type="text" />
        </div>
        </div>


        <div className="mx-3"><a className="linkblue" href="/"><span className="me-1 fs-10" ><i className="bi bi-record-circle-fill"></i></span>View history</a></div>
        <div><a className="linkblue"   href="/"><span className="me-1 fs-10 " ><i className="bi bi-download"></i></span>Download</a></div>
        </div>
    </div>



    <div>
        <table className="table table-hover table-borderless border-top table-responsive border-bottom " id="example">
        <thead>
        <tr className="label">
        <th onClick={()=>setdata(Tablesort(data,"order_timestamp"))} scope="col"  >Time</th>
        <th onClick={()=>setdata(Tablesort(data,"transaction_type"))} scope="col"  >Type</th>
        <th onClick={()=>setdata(Tablesort(data,"tradingsymbol"))} scope="col"  >Instrument</th>
        <th onClick={()=>setdata(Tablesort(data,"product"))} scope="col"  >Product</th>
        <th onClick={()=>setdata(Tablesort(data,"quantity"))} scope="col"  >Qty</th>
        <th onClick={()=>setdata(Tablesort(data,"tradingsymbol"))} scope="col"  >Avg price</th>
        <th onClick={()=>setdata(Tablesort(data,"tradingsymbol"))} scope="col"  >Status</th>
        </tr>
        </thead>
        <tbody>

        {data?.map((ele,i)=>{



        return <tr key={i} className=" border-top">
        <td  scope="row" className=" tablepaddinghold">{ele.order_timestamp}</td>
        <td  scope="row" ><span className={ele.transaction_type=="BUY"?"buybadge ":'sellbadge'}>{ele.transaction_type}</span></td>
        <td  scope="row" >{ele.tradingsymbol}<span className='headerdim opacity75 ms-1'>{ele.exchange}</span></td>
        <td  scope="row" >{ele.product}</td>
        <td  scope="row">{ele.quantity}/{ele.filled_quantity}</td>
        <td  scope="row" className='text-end border-end' >{ele.trigger_price!=0?<>{ele.average_price}/{ele.trigger_price}</>:ele.average_price}</td>
        <td  scope="row" ><span className="completebadge">{ele?.status}</span></td>

        </tr>
        })}



        </tbody>
        </table>

    </div> 
</div>

  )
}




function Trades(props) {
  
    const [trades, settrades] = useState([]);
    const {
      data:tradesdata,
      isLoading:tradeisLoading,
      isSuccess:tradeisSuccess,
      isError:tradeisError,
      error:tradeerror,
      refetch:traderedetch
    } = useGetTradesQuery()


useEffect(()=>{
  traderedetch()
  settrades(tradesdata?.data)
  props?.length2(tradesdata?.data?.length)
},[tradesdata,props])


  return (
    <>
    
{trades?.length>0?
                    <div>

                    <table className="table table-hover table-borderless border-top table-responsive border-bottom " id="example">
                    <thead>
                    <tr className="label">
                    <th onClick={()=>settrades(Tablesort(trades,"trade_id"))} scope="col"  >Trade ID</th>
                    <th onClick={()=>settrades(Tablesort(trades,"fill_timestamp"))} scope="col"  >Fill time</th>
                    <th  scope="col"  >Type</th>
                    <th onClick={()=>settrades(Tablesort(trades,"tradingsymbol"))} scope="col"  >Instrument</th>
                    <th onClick={()=>settrades(Tablesort(trades,"product"))} scope="col"  >Product</th>
                    <th onClick={()=>settrades(Tablesort(trades,"quantity"))} scope="col"  >Qty.</th>
                    <th onClick={()=>settrades(Tablesort(trades,"average_price"))} scope="col"  >Avg. Price</th>
                    </tr>
                    </thead>
                    <tbody>

                    {  trades?.map((ele,i)=>{



                    return <tr key={i} className=" border-top">
                    <td  scope="row" className=" tablepaddinghold">{ele.trade_id}</td>
                    <td  scope="row" >{ele.fill_timestamp}</td>
                    <td  scope="row" ><span className={ele.transaction_type=="BUY"?"buybadge ":'sellbadge'}>{ele.transaction_type}</span></td>
                    <td  scope="row" >{ele.tradingsymbol}<span>{ele.exchange}</span></td>
                    <td  scope="row">{ele.product}</td>
                    <td  scope="row" className='text-end border-end' >{ele.quantity}</td>
                    <td  scope="row" className='text-end' >{ele.average_price}</td>

                    </tr>
                    })}



                    </tbody>
                    </table>

                    </div>:null}



   </>
  )
}

