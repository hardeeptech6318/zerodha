import React ,{useState,useEffect}from 'react'
import Tablesort from '../commonfunction/Tablesort';
import { useGetOrdersQuery } from "../../features/api/apiSlice";

function Order() {

  const {
    data:orders,
    isLoading,
    isSuccess,
    isError,
    error,
    refetch
  } = useGetOrdersQuery()
  
  const [trades, settrades] = useState([]);
const [data, setdata] = useState([]);

  

  useEffect(()=>{
    refetch()
    isLoading ? setdata([]):setdata(orders?.data?.day);
    isLoading ? settrades([]):settrades(orders?.data?.net);
  },[orders])




const showtrade =()=>{

  trades.length>0?settrades([]):settrades(orders?.data?.net)
}
  return (
  <div className='allpagepadding' >
    {data?.length>0?
      <div>

        <div>
              <div className='d-flex justify-content-between mt-2 mb-3'>
                  <div>
                  <h3 style={{fontSize:"1.125rem"}} >Executed orders ({data?.length})</h3>
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
                  <th onClick={()=>setdata(Tablesort(data,"tradingsymbol"))} scope="col"  >Time</th>
                  <th onClick={()=>setdata(Tablesort(data,"tradingsymbol"))} scope="col"  >Type</th>
                  <th onClick={()=>setdata(Tablesort(data,"tradingsymbol"))} scope="col"  >Instrument</th>
                  <th onClick={()=>setdata(Tablesort(data,"tradingsymbol"))} scope="col"  >Product</th>
                  <th onClick={()=>setdata(Tablesort(data,"tradingsymbol"))} scope="col"  >Qty</th>
                  <th onClick={()=>setdata(Tablesort(data,"tradingsymbol"))} scope="col"  >Avg price</th>
                  <th onClick={()=>setdata(Tablesort(data,"tradingsymbol"))} scope="col"  >Status</th>
                  </tr>
                  </thead>
                  <tbody>

                  {data && data.length>0 &&  data?.map((ele,i)=>{



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

{/*------------------------------ Trades  ------------------------------- */}
          <div className='mt-5'>
            <div>

                  <div className='d-flex justify-content-between  '>
                  <div>
                  <h3 style={{fontSize:"1.125rem"}} >Trades <button onClick={showtrade} className='btn'>{trades.length>0?<i className="bi bi-chevron-up"></i>:<i className="bi bi-chevron-down"></i>}</button> {trades.length>0?<>({trades.length})</>:null}</h3>
                  </div> 

                 

                  {trades && trades.length>0?   <div className="d-flex align-items-baseline">
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
{trades && trades.length>0?
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
                            <td  scope="row" ><span className='buybadge'>{ele.transaction_type}</span></td>
                            <td  scope="row" >{ele.tradingsymbol}<span>{ele.exchange}</span></td>
                            <td  scope="row">{ele.product}</td>
                            <td  scope="row" className='text-end border-end' >{ele.quantity}</td>
                            <td  scope="row" className='text-end' >{ele.average_price}</td>

                            </tr>
                            })}



                            </tbody>
                            </table>

                            </div>:null}



           </div>

           {/*----------------------------   --------------------------------------------- */}
              </div>
  :<div className='orderpage d-flex justify-content-center align-items-center flex-column my-5'>
                <div className='orderjournal '>
                <i className="bi bi-journal-bookmark"></i>
                </div>
                <div className=''>You haven't placed any orders today</div>
                <div className='my-4'>
                <button className='btn btn-primary'>Get started</button>        
                </div>
                <div className="mx-3"><a className=" orderhistory " href="/"><span className="me-1 text-primary  " ><i className="bi bi-record-circle-fill"></i></span>View history</a></div>

                </div>
        
        
        }
</div>
  )
}

export default Order