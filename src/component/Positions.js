import React,{useState} from 'react'
import Tablesort from './commonfunction/Tablesort';

function Positions() {


let data2= {
  "net": [
      {
          "tradingsymbol": "ADANIGREEN",
          "exchange": "NSE",
          "instrument_token": 912129,
          "product": "CNC",
          "quantity": 45,
          "overnight_quantity": 0,
          "multiplier": 1,
          "average_price": 968.45,
          "close_price": 0,
          "last_price": 963.35,
          "value": -43580.25,
          "pnl": -229.5,
          "m2m": -229.5,
          "unrealised": -229.5,
          "realised": 0,
          "buy_quantity": 45,
          "buy_price": 968.45,
          "buy_value": 43580.25,
          "buy_m2m": 43580.25,
          "sell_quantity": 0,
          "sell_price": 0,
          "sell_value": 0,
          "sell_m2m": 0,
          "day_buy_quantity": 45,
          "day_buy_price": 968.45,
          "day_buy_value": 43580.25,
          "day_sell_quantity": 0,
          "day_sell_price": 0,
          "day_sell_value": 0
      },
      {
          "tradingsymbol": "ATGL",
          "exchange": "NSE",
          "instrument_token": 1552897,
          "product": "CNC",
          "quantity": 51,
          "overnight_quantity": 0,
          "multiplier": 1,
          "average_price": 772.0392156862747,
          "close_price": 0,
          "last_price": 760.7,
          "value": -39374.00000000001,
          "pnl": -578.3000000000029,
          "m2m": -578.3000000000029,
          "unrealised": -578.3000000000029,
          "realised": 0,
          "buy_quantity": 51,
          "buy_price": 772.0392156862747,
          "buy_value": 39374.00000000001,
          "buy_m2m": 39374.00000000001,
          "sell_quantity": 0,
          "sell_price": 0,
          "sell_value": 0,
          "sell_m2m": 0,
          "day_buy_quantity": 51,
          "day_buy_price": 772.0392156862746,
          "day_buy_value": 39374.00000000001,
          "day_sell_quantity": 0,
          "day_sell_price": 0,
          "day_sell_value": 0
      }
  ],
  "day": [
      {
          "tradingsymbol": "ADANIGREEN",
          "exchange": "NSE",
          "instrument_token": 912129,
          "product": "CNC",
          "quantity": 45,
          "overnight_quantity": 0,
          "multiplier": 1,
          "average_price": 968.45,
          "close_price": 0,
          "last_price": 963.35,
          "value": -43580.25,
          "pnl": -229.5,
          "m2m": -229.5,
          "unrealised": -229.5,
          "realised": 0,
          "buy_quantity": 45,
          "buy_price": 968.45,
          "buy_value": 43580.25,
          "buy_m2m": 43580.25,
          "sell_quantity": 0,
          "sell_price": 0,
          "sell_value": 0,
          "sell_m2m": 0,
          "day_buy_quantity": 45,
          "day_buy_price": 968.45,
          "day_buy_value": 43580.25,
          "day_sell_quantity": 0,
          "day_sell_price": 0,
          "day_sell_value": 0
      },
      {
          "tradingsymbol": "ATGL",
          "exchange": "NSE",
          "instrument_token": 1552897,
          "product": "CNC",
          "quantity": 51,
          "overnight_quantity": 0,
          "multiplier": 1,
          "average_price": 772.0392156862747,
          "close_price": 0,
          "last_price": 760.7,
          "value": -39374.00000000001,
          "pnl": -578.3000000000029,
          "m2m": -578.3000000000029,
          "unrealised": -578.3000000000029,
          "realised": 0,
          "buy_quantity": 51,
          "buy_price": 772.0392156862747,
          "buy_value": 39374.00000000001,
          "buy_m2m": 39374.00000000001,
          "sell_quantity": 0,
          "sell_price": 0,
          "sell_value": 0,
          "sell_m2m": 0,
          "day_buy_quantity": 51,
          "day_buy_price": 772.0392156862746,
          "day_buy_value": 39374.00000000001,
          "day_sell_quantity": 0,
          "day_sell_price": 0,
          "day_sell_value": 0
      }
  ]
}

const [data, setdata] = useState(data2);

  return (
    <div className='allpagepadding'>
      {/*-----------------net------------------------------* */}
      <div>

      <div>
              <div className='d-flex justify-content-between mb-3'>
                  <div>
                  <h3 style={{fontSize:"1.125rem"}} >Positions ({data.net.length})</h3>
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
                  <table className="table table-hover table-borderless border-top  table-responsive border-bottom " id="example">
                  <thead>
                  <tr className="label">
                  <th onClick={()=>setdata(Tablesort(data,"tradingsymbol"))} scope="col"  ><input
                      type="checkbox"
                      className="form-check-input"
                      // checked={this.state.MasterChecked}
                      // id="mastercheck"
                      // onChange={(e) => this.onMasterCheck(e)}
                    /></th>
                  <th onClick={()=>setdata(Tablesort(data,"tradingsymbol"))} scope="col"  >Product</th>
                  <th onClick={()=>setdata(Tablesort(data,"tradingsymbol"))} scope="col"  >Instrument</th>
                  <th onClick={()=>setdata(Tablesort(data,"tradingsymbol"))} scope="col"  >Qty.</th>
                  <th onClick={()=>setdata(Tablesort(data,"tradingsymbol"))} scope="col"  >Avg.</th>
                  <th onClick={()=>setdata(Tablesort(data,"tradingsymbol"))} scope="col"  >LTP</th>
                  <th onClick={()=>setdata(Tablesort(data,"tradingsymbol"))} scope="col"  >P&L</th>
                  <th onClick={()=>setdata(Tablesort(data,"tradingsymbol"))} scope="col"  >Chg.</th>
                  </tr>
                  </thead>
                  <tbody>

                  {data.net && data.net.length>0 &&  data.net.map((ele,i)=>{



                  return <tr key={i} className=" border-top">
                  <td  scope="row" className=" tablepaddinghold"><input
                      type="checkbox"
                      className="form-check-input"
                      // checked={this.state.MasterChecked}
                      // id="mastercheck"
                      // onChange={(e) => this.onMasterCheck(e)}
                    /></td>  
                  <td  scope="row" className=" tablepaddinghold"><span className='sellbadge'>{ele.product}</span></td>
                  <td  scope="row" >{ele.tradingsymbol}<span className='headerdim opacity75 ms-1'>{ele.exchange}</span></td>
                  <td  scope="row" >{ele.quantity}</td>
                  <td  scope="row" >{ele.average_price.toFixed(2)}</td>
                  <td  scope="row">{ele.last_price.toFixed(2)}</td>
                  <td  scope="row"  >{ele.pnl>0?<span className='text-success'>{ele.pnl.toFixed(2)}</span>:<span className='text-danger'>{ele.pnl.toFixed(2)}</span>}</td>
                  <td  scope="row" >{(((ele.last_price-ele.average_price)/ele.average_price)*100)>0?<span className='test-success'>{(((ele.last_price-ele.average_price)/ele.average_price)*100).toFixed(2)}</span>:<span className='text-danger fw-normal' >{(((ele.last_price-ele.average_price)/ele.average_price)*100).toFixed(2)}</span>}</td>
                      
                  </tr>
                  })}


                  <tr className='px-2 py-2 border-top '>
                    <td></td>
                  </tr>
               



                  </tbody>
                  <tfoot>
                 <tr className='border-top'>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td className='text-center' >Total</td>
<td>{data.net.map((ele)=>ele.pnl).reduce((a,b)=>a+b)>0?<span className='text-success' >{data.net.map((ele)=>ele.pnl).reduce((a,b)=>a+b).toFixed(2)}</span>:<span className='text-danger'>{data.net.map((ele)=>ele.pnl).reduce((a,b)=>a+b).toFixed(2)}</span>}</td>
<td></td>


</tr>
</tfoot>
                  </table>

              </div> 
      </div>

      </div>

      {/*------------------day------------------* */}
      <div className='mt-5'>

      <div>

<div>
        <div className='d-flex justify-content-between mt-2 mb-3'>
            <div>
            <h3 style={{fontSize:"1.125rem"}} >Day's history({data.day.length})</h3>
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
            <tr className="label position-sticky">
            
            <th onClick={()=>setdata(Tablesort(data,"tradingsymbol"))} scope="col"  >Product</th>
            <th onClick={()=>setdata(Tablesort(data,"tradingsymbol"))} scope="col"  >Instrument</th>
            <th onClick={()=>setdata(Tablesort(data,"tradingsymbol"))} scope="col"  >Qty.</th>
            <th onClick={()=>setdata(Tablesort(data,"tradingsymbol"))} scope="col"  >Avg.</th>
            <th onClick={()=>setdata(Tablesort(data,"tradingsymbol"))} scope="col"  >LTP</th>
            <th onClick={()=>setdata(Tablesort(data,"tradingsymbol"))} scope="col"  >P&L</th>
            <th onClick={()=>setdata(Tablesort(data,"tradingsymbol"))} scope="col"  >Chg.</th>
            </tr>
            </thead>
            <tbody className='pb-3 '>

            {data.day && data.day.length>0 &&  data.day.map((ele,i)=>{



            return <tr key={i} className=" border-top">
            
            <td  scope="row" className=" tablepaddinghold "><span className='sellbadge'>{ele.product}</span></td>
            <td  scope="row" >{ele.tradingsymbol}<span className='headerdim opacity75 ms-1'>{ele.exchange}</span></td>
            <td  scope="row" >{ele.quantity}</td>
            <td  scope="row" >{ele.average_price.toFixed(2)}</td>
            <td  scope="row">{ele.last_price.toFixed(2)}</td>
            <td  scope="row"  >{ele.pnl>0?<span className='text-success'>{ele.pnl.toFixed(2)}</span>:<span className='text-danger'>{ele.pnl.toFixed(2)}</span>}</td>
                  <td  scope="row" >{(((ele.last_price-ele.average_price)/ele.average_price)*100)>0?<span className='test-success'>{(((ele.last_price-ele.average_price)/ele.average_price)*100).toFixed(2)}</span>:<span className='text-danger fw-normal' >{(((ele.last_price-ele.average_price)/ele.average_price)*100).toFixed(2)}</span>}</td>

            </tr>
            })}



<tr className='tablepaddinghold border-top '>
                    <td></td>
                  </tr>

            </tbody>

            <tfoot>
            <tr className=' border-top '>
<td></td>
<td></td>
<td></td>
<td></td>
<td className='text-center' >Total</td>
<td>{data.day.map((ele)=>ele.pnl).reduce((a,b)=>a+b)>0?<span className='text-success' >{data.day.map((ele)=>ele.pnl).reduce((a,b)=>a+b).toFixed(2)}</span>:<span className='text-danger'>{data.day.map((ele)=>ele.pnl).reduce((a,b)=>a+b).toFixed(2)}</span>}</td>
<td></td>


</tr>
            </tfoot>
            </table>

        </div> 
</div>

</div>


      </div>
      
    </div>
  )
}

export default Positions