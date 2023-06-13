import React,{useEffect, useState} from "react";
import Holdingchart from "./Holdingchart";
import Tablesort from './commonfunction/Tablesort';
import Menu  from "./global_component/Menu";


function Holdings() {
 
  let data10=  [
    {
        "tradingsymbol": "A2ZINFRA",
        "exchange": "NSE",
        "instrument_token": 5351937,
        "isin": "INE619I01012",
        "product": "CNC",
        "price": 0,
        "quantity": 11,
        "used_quantity": 0,
        "t1_quantity": 0,
        "realised_quantity": 11,
        "authorised_quantity": 0,
        "authorised_date": "2023-05-23 00:00:00",
        "authorisation": {},
        "opening_quantity": 11,
        "short_quantity": 0,
        "collateral_quantity": 0,
        "collateral_type": "",
        "discrepancy": false,
        "average_price": 7.81,
        "last_price": 6.6,
        "close_price": 6.6,
        "pnl": -13.309999999999999,
        "day_change": 0,
        "day_change_percentage": 0
    },
    {
        "tradingsymbol": "AAL",
        "exchange": "BSE",
        "instrument_token": 138755076,
        "isin": "INE911Z01017",
        "product": "CNC",
        "price": 0,
        "quantity": 1,
        "used_quantity": 0,
        "t1_quantity": 0,
        "realised_quantity": 1,
        "authorised_quantity": 0,
        "authorised_date": "2023-05-23 00:00:00",
        "authorisation": {},
        "opening_quantity": 1,
        "short_quantity": 0,
        "collateral_quantity": 0,
        "collateral_type": "",
        "discrepancy": false,
        "average_price": 336.1,
        "last_price": 368,
        "close_price": 356.1,
        "pnl": 31.899999999999977,
        "day_change": 11.899999999999977,
        "day_change_percentage": 3.341757933164835
    },
    {
        "tradingsymbol": "ADANIENT",
        "exchange": "NSE",
        "instrument_token": 6401,
        "isin": "INE423A01024",
        "product": "CNC",
        "price": 0,
        "quantity": 3,
        "used_quantity": 0,
        "t1_quantity": 0,
        "realised_quantity": 3,
        "authorised_quantity": 0,
        "authorised_date": "2023-05-23 00:00:00",
        "authorisation": {},
        "opening_quantity": 3,
        "short_quantity": 0,
        "collateral_quantity": 0,
        "collateral_type": "",
        "discrepancy": false,
        "average_price": 1419,
        "last_price": 2633.7,
        "close_price": 2326.1,
        "pnl": 3644.0999999999995,
        "day_change": 307.5999999999999,
        "day_change_percentage": 13.223851081208887
    },
    {
        "tradingsymbol": "AMBUJACEM",
        "exchange": "NSE",
        "instrument_token": 325121,
        "isin": "INE079A01024",
        "product": "CNC",
        "price": 0,
        "quantity": 10,
        "used_quantity": 0,
        "t1_quantity": 0,
        "realised_quantity": 10,
        "authorised_quantity": 0,
        "authorised_date": "2023-05-23 00:00:00",
        "authorisation": {},
        "opening_quantity": 10,
        "short_quantity": 0,
        "collateral_quantity": 0,
        "collateral_type": "",
        "discrepancy": false,
        "average_price": 399.6,
        "last_price": 427.3,
        "close_price": 423.9,
        "pnl": 276.9999999999999,
        "day_change": 3.400000000000034,
        "day_change_percentage": 0.8020759613116382
    },
    {
        "tradingsymbol": "APOLLOHOSP",
        "exchange": "BSE",
        "instrument_token": 130270468,
        "isin": "INE437A01024",
        "product": "CNC",
        "price": 0,
        "quantity": 1,
        "used_quantity": 0,
        "t1_quantity": 0,
        "realised_quantity": 1,
        "authorised_quantity": 0,
        "authorised_date": "2023-05-23 00:00:00",
        "authorisation": {},
        "opening_quantity": 1,
        "short_quantity": 0,
        "collateral_quantity": 0,
        "collateral_type": "",
        "discrepancy": false,
        "average_price": 3989.95,
        "last_price": 4551.55,
        "close_price": 4610.4,
        "pnl": 561.6000000000004,
        "day_change": -58.849999999999454,
        "day_change_percentage": -1.276461912198496
    },
    {
        "tradingsymbol": "BAGFILMS",
        "exchange": "BSE",
        "instrument_token": 136321796,
        "isin": "INE116D01028",
        "product": "CNC",
        "price": 0,
        "quantity": 1,
        "used_quantity": 0,
        "t1_quantity": 0,
        "realised_quantity": 1,
        "authorised_quantity": 0,
        "authorised_date": "2023-05-23 00:00:00",
        "authorisation": {},
        "opening_quantity": 1,
        "short_quantity": 0,
        "collateral_quantity": 0,
        "collateral_type": "",
        "discrepancy": false,
        "average_price": 4.5,
        "last_price": 4.1,
        "close_price": 4.21,
        "pnl": -0.40000000000000036,
        "day_change": -0.11000000000000032,
        "day_change_percentage": -2.6128266033254235
    },
    {
        "tradingsymbol": "GOLDBEES",
        "exchange": "BSE",
        "instrument_token": 151064324,
        "isin": "INF204KB17I5",
        "product": "CNC",
        "price": 0,
        "quantity": 1,
        "used_quantity": 0,
        "t1_quantity": 0,
        "realised_quantity": 1,
        "authorised_quantity": 0,
        "authorised_date": "2023-05-23 00:00:00",
        "authorisation": {},
        "opening_quantity": 1,
        "short_quantity": 0,
        "collateral_quantity": 0,
        "collateral_type": "",
        "discrepancy": false,
        "average_price": 47.62,
        "last_price": 51.44,
        "close_price": 51.99,
        "pnl": 3.8200000000000003,
        "day_change": -0.5500000000000043,
        "day_change_percentage": -1.0578957491825434
    },
    {
        "tradingsymbol": "IDEA",
        "exchange": "BSE",
        "instrument_token": 136402436,
        "isin": "INE669E01016",
        "product": "CNC",
        "price": 0,
        "quantity": 32,
        "used_quantity": 0,
        "t1_quantity": 0,
        "realised_quantity": 32,
        "authorised_quantity": 0,
        "authorised_date": "2023-05-23 00:00:00",
        "authorisation": {},
        "opening_quantity": 32,
        "short_quantity": 0,
        "collateral_quantity": 0,
        "collateral_type": "",
        "discrepancy": false,
        "average_price": 6.997187,
        "last_price": 6.98,
        "close_price": 7.02,
        "pnl": -0.5499839999999949,
        "day_change": -0.03999999999999915,
        "day_change_percentage": -0.5698005698005577
    },
    {
        "tradingsymbol": "IRFC",
        "exchange": "BSE",
        "instrument_token": 139073796,
        "isin": "INE053F01010",
        "product": "CNC",
        "price": 0,
        "quantity": 1,
        "used_quantity": 0,
        "t1_quantity": 0,
        "realised_quantity": 1,
        "authorised_quantity": 0,
        "authorised_date": "2023-05-23 00:00:00",
        "authorisation": {},
        "opening_quantity": 1,
        "short_quantity": 0,
        "collateral_quantity": 0,
        "collateral_type": "",
        "discrepancy": false,
        "average_price": 28.8,
        "last_price": 33.33,
        "close_price": 33.37,
        "pnl": 4.529999999999998,
        "day_change": -0.03999999999999915,
        "day_change_percentage": -0.11986814504045294
    },
    {
        "tradingsymbol": "LTIM",
        "exchange": "BSE",
        "instrument_token": 138241284,
        "isin": "INE214T01019",
        "product": "CNC",
        "price": 0,
        "quantity": 1,
        "used_quantity": 0,
        "t1_quantity": 0,
        "realised_quantity": 1,
        "authorised_quantity": 0,
        "authorised_date": "2023-05-23 00:00:00",
        "authorisation": {},
        "opening_quantity": 1,
        "short_quantity": 0,
        "collateral_quantity": 0,
        "collateral_type": "",
        "discrepancy": false,
        "average_price": 4393.85,
        "last_price": 4857.25,
        "close_price": 4991.85,
        "pnl": 463.39999999999964,
        "day_change": -134.60000000000036,
        "day_change_percentage": -2.6963951240522124
    },
    {
        "tradingsymbol": "NMDC",
        "exchange": "BSE",
        "instrument_token": 134750980,
        "isin": "INE584A01023",
        "product": "CNC",
        "price": 0,
        "quantity": 25,
        "used_quantity": 0,
        "t1_quantity": 0,
        "realised_quantity": 25,
        "authorised_quantity": 0,
        "authorised_date": "2023-05-23 00:00:00",
        "authorisation": {},
        "opening_quantity": 25,
        "short_quantity": 0,
        "collateral_quantity": 0,
        "collateral_type": "",
        "discrepancy": false,
        "average_price": 74.61437,
        "last_price": 105.8,
        "close_price": 105.15,
        "pnl": 779.64075,
        "day_change": 0.6499999999999915,
        "day_change_percentage": 0.6181645268663732
    },
    {
        "tradingsymbol": "NSLNISP",
        "exchange": "BSE",
        "instrument_token": 139204612,
        "isin": "INE0NNS01018",
        "product": "CNC",
        "price": 0,
        "quantity": 25,
        "used_quantity": 0,
        "t1_quantity": 0,
        "realised_quantity": 25,
        "authorised_quantity": 0,
        "authorised_date": "2023-05-23 00:00:00",
        "authorisation": {},
        "opening_quantity": 25,
        "short_quantity": 0,
        "collateral_quantity": 0,
        "collateral_type": "",
        "discrepancy": false,
        "average_price": 100.08563,
        "last_price": 38.07,
        "close_price": 37.88,
        "pnl": -1550.3907499999998,
        "day_change": 0.18999999999999773,
        "day_change_percentage": 0.5015839493136159
    },
    {
        "tradingsymbol": "ONGC",
        "exchange": "NSE",
        "instrument_token": 633601,
        "isin": "INE213A01029",
        "product": "CNC",
        "price": 0,
        "quantity": 6,
        "used_quantity": 0,
        "t1_quantity": 0,
        "realised_quantity": 6,
        "authorised_quantity": 0,
        "authorised_date": "2023-05-23 00:00:00",
        "authorisation": {},
        "opening_quantity": 6,
        "short_quantity": 0,
        "collateral_quantity": 0,
        "collateral_type": "",
        "discrepancy": false,
        "average_price": 166.683333,
        "last_price": 165,
        "close_price": 165.6,
        "pnl": -10.099998000000028,
        "day_change": -0.5999999999999943,
        "day_change_percentage": -0.3623188405797067
    },
    {
        "tradingsymbol": "PEL",
        "exchange": "BSE",
        "instrument_token": 128077316,
        "isin": "INE140A01024",
        "product": "CNC",
        "price": 0,
        "quantity": 2,
        "used_quantity": 0,
        "t1_quantity": 0,
        "realised_quantity": 2,
        "authorised_quantity": 0,
        "authorised_date": "2023-05-23 00:00:00",
        "authorisation": {},
        "opening_quantity": 2,
        "short_quantity": 0,
        "collateral_quantity": 0,
        "collateral_type": "",
        "discrepancy": false,
        "average_price": 2089.05804,
        "last_price": 774.15,
        "close_price": 760.05,
        "pnl": -2629.8160799999996,
        "day_change": 14.100000000000023,
        "day_change_percentage": 1.8551411091375598
    },
    {
        "tradingsymbol": "PNB",
        "exchange": "BSE",
        "instrument_token": 136310020,
        "isin": "INE160A01022",
        "product": "CNC",
        "price": 0,
        "quantity": 1,
        "used_quantity": 0,
        "t1_quantity": 0,
        "realised_quantity": 1,
        "authorised_quantity": 0,
        "authorised_date": "2023-05-23 00:00:00",
        "authorisation": {},
        "opening_quantity": 1,
        "short_quantity": 0,
        "collateral_quantity": 0,
        "collateral_type": "",
        "discrepancy": false,
        "average_price": 50.75,
        "last_price": 50.64,
        "close_price": 50.56,
        "pnl": -0.10999999999999943,
        "day_change": 0.0799999999999983,
        "day_change_percentage": 0.15822784810126245
    },
    {
        "tradingsymbol": "PPLPHARMA",
        "exchange": "NSE",
        "instrument_token": 2962177,
        "isin": "INE0DK501011",
        "product": "CNC",
        "price": 0,
        "quantity": 8,
        "used_quantity": 0,
        "t1_quantity": 0,
        "realised_quantity": 8,
        "authorised_quantity": 0,
        "authorised_date": "2023-05-23 00:00:00",
        "authorisation": {},
        "opening_quantity": 8,
        "short_quantity": 0,
        "collateral_quantity": 0,
        "collateral_type": "",
        "discrepancy": false,
        "average_price": 36.785489,
        "last_price": 75.7,
        "close_price": 75.5,
        "pnl": 311.31608800000004,
        "day_change": 0.20000000000000284,
        "day_change_percentage": 0.2649006622516594
    },
    {
        "tradingsymbol": "SUZLON",
        "exchange": "BSE",
        "instrument_token": 136362756,
        "isin": "INE040H01021",
        "product": "CNC",
        "price": 0,
        "quantity": 1,
        "used_quantity": 0,
        "t1_quantity": 0,
        "realised_quantity": 1,
        "authorised_quantity": 0,
        "authorised_date": "2023-05-23 00:00:00",
        "authorisation": {},
        "opening_quantity": 1,
        "short_quantity": 0,
        "collateral_quantity": 0,
        "collateral_type": "",
        "discrepancy": false,
        "average_price": 9.37,
        "last_price": 9.46,
        "close_price": 9.29,
        "pnl": 0.09000000000000163,
        "day_change": 0.1700000000000017,
        "day_change_percentage": 1.8299246501614825
    },
    {
        "tradingsymbol": "VEDL",
        "exchange": "NSE",
        "instrument_token": 784129,
        "isin": "INE205A01025",
        "product": "CNC",
        "price": 0,
        "quantity": 17,
        "used_quantity": 0,
        "t1_quantity": 0,
        "realised_quantity": 17,
        "authorised_quantity": 0,
        "authorised_date": "2023-05-23 00:00:00",
        "authorisation": {},
        "opening_quantity": 17,
        "short_quantity": 0,
        "collateral_quantity": 0,
        "collateral_type": "",
        "discrepancy": false,
        "average_price": 262.55,
        "last_price": 288.35,
        "close_price": 287.5,
        "pnl": 438.6000000000002,
        "day_change": 0.8500000000000227,
        "day_change_percentage": 0.2956521739130514
    },
    {
        "tradingsymbol": "YESBANK",
        "exchange": "NSE",
        "instrument_token": 3050241,
        "isin": "INE528G01035",
        "product": "CNC",
        "price": 0,
        "quantity": 2,
        "used_quantity": 0,
        "t1_quantity": 0,
        "realised_quantity": 2,
        "authorised_quantity": 0,
        "authorised_date": "2023-05-23 00:00:00",
        "authorisation": {},
        "opening_quantity": 2,
        "short_quantity": 0,
        "collateral_quantity": 0,
        "collateral_type": "",
        "discrepancy": false,
        "average_price": 15.4,
        "last_price": 15.55,
        "close_price": 15.65,
        "pnl": 0.3000000000000007,
        "day_change": -0.09999999999999964,
        "day_change_percentage": -0.6389776357827454
    },
    {
        "tradingsymbol": "ZYDUSLIFE",
        "exchange": "BSE",
        "instrument_token": 136274180,
        "isin": "INE010B01027",
        "product": "CNC",
        "price": 0,
        "quantity": 7,
        "used_quantity": 0,
        "t1_quantity": 0,
        "realised_quantity": 7,
        "authorised_quantity": 0,
        "authorised_date": "2023-05-23 00:00:00",
        "authorisation": {},
        "opening_quantity": 7,
        "short_quantity": 0,
        "collateral_quantity": 0,
        "collateral_type": "",
        "discrepancy": false,
        "average_price": 619.85,
        "last_price": 508,
        "close_price": 506.4,
        "pnl": -782.9500000000002,
        "day_change": 1.6000000000000227,
        "day_change_percentage": 0.3159557661927375
    }
]

 
  

const [data, setdata] = useState(data10);
const [calculate, setcalculate] = useState({
  investment:[0,0],current:[0,0],daypl:[0,0],pl:[0,0]
});

useEffect(()=>{
let investment =data.map((ele)=>ele.quantity*ele.average_price).reduce((a,b)=>a+b).toFixed(2).toString().split(".")
let current =data.map((ele)=>ele.quantity*ele.last_price).reduce((a,b)=>a+b).toFixed(2).toString().split(".")
let daypl =data.map((ele)=>ele.pnl).reduce((a,b)=>a+b).toFixed(2).toString().split(".")
let pl =data.map((ele)=>ele.pnl).reduce((a,b)=>a+b).toFixed(2).toString().split(".")
setcalculate({
  investment,current,daypl,pl
})
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

      <table className="table table-hover table-borderless border-top table-responsive border-bottom " id="example">
  <thead>
    <tr className="label text-end">
      <th onClick={()=>setdata(Tablesort(data,"tradingsymbol"))} scope="col" className="border-end text-start" >Instrument</th>
      <th onClick={()=>setdata(Tablesort(data,"quantity"))} scope="col">Qty</th>
      <th onClick={()=>setdata(Tablesort(data,"average_price"))} scope="col">Avg. cost</th>
      <th onClick={()=>setdata(Tablesort(data,"last_price"))} scope="col" className="border-end">LTP</th>
      
      <th scope="col">Cur. val</th>
      <th onClick={()=>setdata(Tablesort(data,"pnl"))}  scope="col">P&L</th>
      <th  scope="col">Net chg.</th>
      <th onClick={()=>setdata(Tablesort(data,"day_change_percentage"))} scope="col">Day chg.</th>
    </tr>
  </thead>
  <tbody>

    {data && data.length>0 &&  data.map((ele,i)=>{



return <tr key={i} className=" border-top text-end menutr ">
<td  scope="row" className="border-end tablepaddinghold text-start d-flex justify-content-between" ><span>{ele.tradingsymbol}</span> <Menu/> </td>
<td>{ele.quantity}</td>
<td>{ele.average_price.toFixed(2)}</td>
<td className="border-end" >{ele.last_price.toFixed(2)}</td>
<td>{(ele.last_price*ele.quantity).toFixed(2)}</td>
<td>{ele.pnl>0?<span className="text-success">{ele.pnl.toFixed(2)}</span>:<span className="text-red" >{ele.pnl.toFixed(2)}</span>}</td>
<td>{(((ele.last_price-ele.average_price)/ele.average_price)*100)>0?<span className="text-success">{(((ele.last_price-ele.average_price)/ele.average_price)*100).toFixed(2)} %</span>:<span className="text-red" >{(((ele.last_price-ele.average_price)/ele.average_price)*100).toFixed(2)} %</span>}</td>
<td>{ele.day_change_percentage>0?<span className="text-success">{ele.day_change_percentage.toFixed(2)} %</span>:<span className="text-red" >{ele.day_change_percentage.toFixed(2)} %</span>}</td>
</tr>
    })}
    
   
    <tr  className="p-2 border-top">
      <td colSpan="8" ></td>
    </tr>
  </tbody>
</table>
        
      </div>
      
      
      
      </section>



      <section>
        <div className="my-5">
          <div>
            <div className="row">
              <div className="col-3">
              <div className="label " >Total investment</div>
              <div className="d-flex align-items-baseline">
              <h1>{calculate.investment[0]}</h1><span>.{calculate.investment[1]}</span>
              </div>  
              </div>
              <div className="col-3">
              <div className="label" >Current value</div>
              <div className="d-flex align-items-baseline">
              <h1>{calculate.current[0]}</h1><span>.{calculate.current[1]}</span>
              </div>
              </div>
              <div className="col-3">
              <div className="label" >Days's P&L</div>
              <div>
              {calculate.daypl[0]>0?<span className="text-success d-flex align-items-baseline"><h1>{calculate.daypl[0]}</h1><span>.{calculate.daypl[1]}</span></span>:<span className="text-red d-flex align-items-baseline"><h1>{calculate.daypl[0]}</h1><span>.{calculate.daypl[1]}</span></span>}
              </div>
              </div>
              <div className="col-3">
              <div className="label" >Total P&L</div>
              <div >
              {calculate.daypl[0]>0?<span className="text-success d-flex align-items-baseline"><h1>{calculate.daypl[0]}</h1><span>.{calculate.daypl[1]}</span></span>:<span className="text-red d-flex align-items-baseline"><h1>{calculate.daypl[0]}</h1><span>.{calculate.daypl[1]}</span></span>}
              </div>
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
