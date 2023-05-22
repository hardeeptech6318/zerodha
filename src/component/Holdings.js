import React,{useEffect, useState} from "react";
import Holdingchart from "./Holdingchart";
import Tablesort from './commonfunction/Tablesort';

function Holdings() {
  const [data, setdata] = useState([]);
  let data2= [
    {
        "tradingsymbol": "INDUSINDBK",
        "exchange": "BSE",
        "instrument_token": 136239876,
        "isin": "INE095A01012",
        "product": "CNC",
        "price": 0,
        "quantity": 0,
        "used_quantity": 40,
        "t1_quantity": 0,
        "realised_quantity": 0,
        "authorised_quantity": 40,
        "authorised_date": "2023-05-22 17:00:00",
        "authorisation": {
            "pre": {
                "2023-05-22 17:00:00": 40
            }
        },
        "opening_quantity": 40,
        "short_quantity": 0,
        "collateral_quantity": 0,
        "collateral_type": "",
        "discrepancy": false,
        "average_price": 1190.1,
        "last_price": 1244.85,
        "close_price": 1248.3,
        "pnl": 0,
        "day_change": -3.4500000000000455,
        "day_change_percentage": -0.276375871184815
    },
    {
        "tradingsymbol": "INFY",
        "exchange": "NSE",
        "instrument_token": 408065,
        "isin": "INE009A01021",
        "product": "CNC",
        "price": 0,
        "quantity": 0,
        "used_quantity": 27,
        "t1_quantity": 0,
        "realised_quantity": 0,
        "authorised_quantity": 27,
        "authorised_date": "2023-05-22 17:00:00",
        "authorisation": {
            "pre": {
                "2023-05-22 17:00:00": 27
            }
        },
        "opening_quantity": 27,
        "short_quantity": 0,
        "collateral_quantity": 0,
        "collateral_type": "",
        "discrepancy": false,
        "average_price": 1400,
        "last_price": 1292.8,
        "close_price": 1268.9,
        "pnl": 0,
        "day_change": 23.899999999999864,
        "day_change_percentage": 1.8835211600598836
    }
]

 
  useEffect(()=>{
    setdata(data2)
  },[])

  

  return (
    <div className="allpagepadding" >
      <section>
        <div className="d-flex justify-content-between "  >
        <div className="d-flex">
          <h3 className="page-title-small">Holdings(2)</h3>
          <div className="mx-3">
          <select className=" form-select ">
        <option selected>All stocks</option>
        <option value="1">Kite only</option>
        <option value="2">Small case</option>
        <option value="3">Mutual funds</option>
      </select>
          </div>
        </div>
        <div className="d-flex align-items-baseline">
        <div>
        <div className="holdingsearch">
  <label className="m-1 mx-2 " ><i className="bi bi-search"></i></label>
  <input className="inputsearch" placeholder="Filter eg:INFY" type="text" />
</div>
        </div>
        <div className="linkblue  mx-3"><a className="linkblue" href="/"><span className="me-1 fs-10 "><i className="bi bi-bag-dash"></i></span>authorization</a></div>
        <div><a className="linkblue" href="/"><span className="me-1 fs-10" ><i className="bi bi-diagram-2"></i></span >family</a></div>
        <div className="mx-3"><a className="linkblue" href="/"><span className="me-1 fs-10" ><i className="bi bi-record-circle-fill"></i></span>Analytic</a></div>
        <div><a className="linkblue"   href="/"><span className="me-1 fs-10 " ><i className="bi bi-download"></i></span>Download</a></div>
        </div>
        </div>
      

      <div className="my-4">

      <table class="table table-hover table-borderless border-top table-responsive border-bottom " id="example">
  <thead>
    <tr className="label">
      <th onClick={()=>setdata(Tablesort(data,"tradingsymbol"))} scope="col" className="border-end" >Instrument</th>
      <th scope="col">Qty</th>
      <th scope="col">Avg. cost</th>
      <th scope="col" className="border-end">LTP</th>
      <th scope="col">Cur. val</th>
      <th scope="col">P&L</th>
      <th scope="col">Net chg.</th>
      <th scope="col">Day chg.</th>
    </tr>
  </thead>
  <tbody>

    {data.map((ele,i)=>{
return <tr key={i} className=" border-top">
<td  scope="row" className="border-end tablepaddinghold">{ele.tradingsymbol}</td>
<td>{ele.quantity}</td>
<td>{ele.average_price}</td>
<td className="border-end" >{ele.last_price}</td>
<td>{ele.last_price*ele.quantity}</td>
<td>{ele.pnl}</td>
<td>{(((ele.last_price-ele.average_price)/ele.average_price)*100).toFixed(2)}<small>%</small></td>
<td>{ele.day_change_percentage.toFixed(2)}<small>%</small></td>
</tr>
    })}
    
   
    
  </tbody>
</table>
        
      </div>
      
      
      
      </section>



      <section>
        <div className="my-5">
          <div>
            <div className="row">
              <div className="col-3">
              <div className="label" >Total investment</div>
              <h1>85,404</h1><span>.00</span>
              </div>
              <div className="col-3">
              <div className="label" >Current value</div>
              <h1>85,404</h1><span >.00</span>
              </div>
              <div className="col-3">
              <div className="label" >Days's P&L</div>
              <h1>85,404</h1><span >.00</span>
              </div>
              <div className="col-3">
              <div className="label" >Total P&L</div>
              <h1>85,404</h1><span  >.00</span>
              </div>
            </div>
          </div>
          <div>
            <Holdingchart/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Holdings;
