import React ,{useState}from 'react'
import Tablesort from '../commonfunction/Tablesort';

function Order() {


let data2 =[
  {
      "placed_by": "EM1078",
      "order_id": "230525003144376",
      "exchange_order_id": "1000000122271051",
      "parent_order_id": null,
      "status": "COMPLETE",
      "status_message": null,
      "status_message_raw": null,
      "order_timestamp": "2023-05-25 14:05:16",
      "exchange_update_timestamp": "2023-05-25 14:05:16",
      "exchange_timestamp": "2023-05-25 14:05:16",
      "variety": "regular",
      "modified": false,
      "exchange": "NFO",
      "tradingsymbol": "NIFTY23MAY18250CE",
      "instrument_token": 18847490,
      "order_type": "LIMIT",
      "transaction_type": "BUY",
      "validity": "DAY",
      "validity_ttl": 0,
      "product": "NRML",
      "quantity": 50,
      "disclosed_quantity": 0,
      "price": 7.6,
      "trigger_price": 0,
      "average_price": 7.5,
      "filled_quantity": 50,
      "pending_quantity": 0,
      "cancelled_quantity": 0,
      "market_protection": 0,
      "meta": {},
      "tag": null,
      "guid": "19Xwcdnxtdrssiu"
  },
  {
      "placed_by": "EM1078",
      "order_id": "230525003176597",
      "exchange_order_id": "1000000123745756",
      "parent_order_id": null,
      "status": "COMPLETE",
      "status_message": null,
      "status_message_raw": null,
      "order_timestamp": "2023-05-25 14:09:12",
      "exchange_update_timestamp": "2023-05-25 14:09:12",
      "exchange_timestamp": "2023-05-25 14:09:12",
      "variety": "regular",
      "modified": false,
      "exchange": "NFO",
      "tradingsymbol": "NIFTY23MAY18250CE",
      "instrument_token": 18847490,
      "order_type": "MARKET",
      "transaction_type": "BUY",
      "validity": "DAY",
      "validity_ttl": 0,
      "product": "NRML",
      "quantity": 50,
      "disclosed_quantity": 0,
      "price": 0,
      "trigger_price": 0,
      "average_price": 10.15,
      "filled_quantity": 50,
      "pending_quantity": 0,
      "cancelled_quantity": 0,
      "market_protection": 0,
      "meta": {},
      "tag": null,
      "guid": "19Xgzzwuxouxxfs"
  },
  {
      "placed_by": "EM1078",
      "order_id": "230525003184205",
      "exchange_order_id": "1000000124065411",
      "parent_order_id": null,
      "status": "COMPLETE",
      "status_message": null,
      "status_message_raw": null,
      "order_timestamp": "2023-05-25 14:11:00",
      "exchange_update_timestamp": "2023-05-25 14:11:00",
      "exchange_timestamp": "2023-05-25 14:11:00",
      "variety": "regular",
      "modified": false,
      "exchange": "NFO",
      "tradingsymbol": "NIFTY23MAY18250CE",
      "instrument_token": 18847490,
      "order_type": "LIMIT",
      "transaction_type": "SELL",
      "validity": "DAY",
      "validity_ttl": 0,
      "product": "NRML",
      "quantity": 100,
      "disclosed_quantity": 0,
      "price": 5,
      "trigger_price": 10.2,
      "average_price": 10.2,
      "filled_quantity": 100,
      "pending_quantity": 0,
      "cancelled_quantity": 0,
      "market_protection": 0,
      "meta": {},
      "tag": null,
      "guid": "19Xvmxqvikyispo"
  },
  {
      "placed_by": "EM1078",
      "order_id": "230525003931511",
      "exchange_order_id": "1100000141593641",
      "parent_order_id": null,
      "status": "COMPLETE",
      "status_message": null,
      "status_message_raw": null,
      "order_timestamp": "2023-05-25 15:00:50",
      "exchange_update_timestamp": "2023-05-25 15:00:50",
      "exchange_timestamp": "2023-05-25 15:00:50",
      "variety": "regular",
      "modified": false,
      "exchange": "NFO",
      "tradingsymbol": "NIFTY23MAY18300PE",
      "instrument_token": 18849282,
      "order_type": "MARKET",
      "transaction_type": "BUY",
      "validity": "DAY",
      "validity_ttl": 0,
      "product": "NRML",
      "quantity": 100,
      "disclosed_quantity": 0,
      "price": 0,
      "trigger_price": 0,
      "average_price": 3.75,
      "filled_quantity": 100,
      "pending_quantity": 0,
      "cancelled_quantity": 0,
      "market_protection": 0,
      "meta": {},
      "tag": null,
      "guid": "19Xejemcsoonbbf"
  },
  {
      "placed_by": "EM1078",
      "order_id": "230525003949312",
      "exchange_order_id": "1100000142029100",
      "parent_order_id": null,
      "status": "COMPLETE",
      "status_message": null,
      "status_message_raw": null,
      "order_timestamp": "2023-05-25 15:05:54",
      "exchange_update_timestamp": "2023-05-25 15:05:54",
      "exchange_timestamp": "2023-05-25 15:01:28",
      "variety": "regular",
      "modified": false,
      "exchange": "NFO",
      "tradingsymbol": "NIFTY23MAY18300PE",
      "instrument_token": 18849282,
      "order_type": "LIMIT",
      "transaction_type": "BUY",
      "validity": "DAY",
      "validity_ttl": 0,
      "product": "NRML",
      "quantity": 50,
      "disclosed_quantity": 0,
      "price": 2,
      "trigger_price": 0,
      "average_price": 2,
      "filled_quantity": 50,
      "pending_quantity": 0,
      "cancelled_quantity": 0,
      "market_protection": 0,
      "meta": {},
      "tag": null,
      "guid": "19Xecnpkmvmbbgs"
  }
]

let data3=[
  {
      "account_id": "EM1078",
      "trade_id": "14381015",
      "order_id": "230525003144376",
      "exchange": "NFO",
      "tradingsymbol": "NIFTY23MAY18250CE",
      "instrument_token": 18847490,
      "product": "NRML",
      "average_price": 7.5,
      "quantity": 50,
      "exchange_order_id": "1000000122271051",
      "transaction_type": "BUY",
      "fill_timestamp": "2023-05-25 14:05:16",
      "order_timestamp": "14:05:16",
      "exchange_timestamp": "2023-05-25 14:05:16"
  },
  {
      "account_id": "EM1078",
      "trade_id": "14544995",
      "order_id": "230525003176597",
      "exchange": "NFO",
      "tradingsymbol": "NIFTY23MAY18250CE",
      "instrument_token": 18847490,
      "product": "NRML",
      "average_price": 10.15,
      "quantity": 50,
      "exchange_order_id": "1000000123745756",
      "transaction_type": "BUY",
      "fill_timestamp": "2023-05-25 14:09:12",
      "order_timestamp": "14:09:12",
      "exchange_timestamp": "2023-05-25 14:09:12"
  },
  {
      "account_id": "EM1078",
      "trade_id": "14674575",
      "order_id": "230525003184205",
      "exchange": "NFO",
      "tradingsymbol": "NIFTY23MAY18250CE",
      "instrument_token": 18847490,
      "product": "NRML",
      "average_price": 10.2,
      "quantity": 100,
      "exchange_order_id": "1000000124065411",
      "transaction_type": "SELL",
      "fill_timestamp": "2023-05-25 14:11:00",
      "order_timestamp": "14:11:00",
      "exchange_timestamp": "2023-05-25 14:11:00"
  },
  {
      "account_id": "EM1078",
      "trade_id": "102858411",
      "order_id": "230525003931511",
      "exchange": "NFO",
      "tradingsymbol": "NIFTY23MAY18300PE",
      "instrument_token": 18849282,
      "product": "NRML",
      "average_price": 3.75,
      "quantity": 100,
      "exchange_order_id": "1100000141593641",
      "transaction_type": "BUY",
      "fill_timestamp": "2023-05-25 15:00:50",
      "order_timestamp": "15:00:50",
      "exchange_timestamp": "2023-05-25 15:00:50"
  },
  {
      "account_id": "EM1078",
      "trade_id": "103562771",
      "order_id": "230525003949312",
      "exchange": "NFO",
      "tradingsymbol": "NIFTY23MAY18300PE",
      "instrument_token": 18849282,
      "product": "NRML",
      "average_price": 2,
      "quantity": 50,
      "exchange_order_id": "1100000142029100",
      "transaction_type": "BUY",
      "fill_timestamp": "2023-05-25 15:05:54",
      "order_timestamp": "15:05:54",
      "exchange_timestamp": "2023-05-25 15:01:28"
  }
]

const [trades, settrades] = useState([]);
const [data, setdata] = useState(data2);
const showtrade =()=>{

  trades.length>0?settrades([]):settrades(data3)
}
  return (
  <div className='allpagepadding' >
    {data.length>0?
      <div>

        <div>
              <div className='d-flex justify-content-between mt-2 mb-3'>
                  <div>
                  <h3 style={{fontSize:"1.125rem"}} >Executed orders ({data.length})</h3>
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

                  {data && data.length>0 &&  data.map((ele,i)=>{



                  return <tr key={i} className=" border-top">
                  <td  scope="row" className=" tablepaddinghold">{ele.order_timestamp}</td>
                  <td  scope="row" ><span className={ele.transaction_type=="BUY"?"buybadge ":'sellbadge'}>{ele.transaction_type}</span></td>
                  <td  scope="row" >{ele.tradingsymbol}<span className='headerdim opacity75 ms-1'>{ele.exchange}</span></td>
                  <td  scope="row" >{ele.product}</td>
                  <td  scope="row">{ele.quantity}/{ele.filled_quantity}</td>
                  <td  scope="row" className='text-end border-end' >{ele.trigger_price!=0?<>{ele.average_price}/{ele.trigger_price}</>:ele.average_price}</td>
                  <td  scope="row" ><span className="completebadge">{ele.status}</span></td>

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

                            {  trades.map((ele,i)=>{



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