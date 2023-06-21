import React,{useState,useEffect} from 'react'
import { useGetMarginsQuery } from "../features/api/apiSlice";

function Funds() {

  const {
    data:marginsdata,
    isLoading,
    isSuccess,
    isError,
    error,
    refetch
  } = useGetMarginsQuery()
  const [margins, setmargins] = useState([]);

  

  useEffect(()=>{
    refetch()
    isLoading ? setmargins([]) : setmargins(marginsdata?.data);
    
  },[margins])
  


  return (
    <div className='p-4 pe-3'>
      <div>
        <div className='text-end  tablepadding  '>
          <span className='label' >  Instant, zero-cost fund transfers with <span><i className="bi bi-bank2"></i></span> </span>
          <a className='fundbutton mx-2 px-4 ' href='/'>Add Funds</a>
          <a className='withdrawbutton px-4 ' href='/'>Withdraw</a>

        </div>
        <div className='row'>
          <div className='col-6'>
          <div className="my-3 secondary-title">
              <span className="me-3">
                <i className="bi bi-pie-chart"></i>
              </span>
              <div className='float-end' >
                <a className='linkblue click mx-2' ><span className='mx-1' ><i className="bi bi-record-circle-fill"></i> </span>view statement</a>
                <a className='linkblue click' ><span className='mx-1'><i className="bi bi-info-circle"></i> </span>Help</a>
              </div>
              <span>commodity</span>
            </div>
            <div className='p-3 border'>
            <table className="table table-hover table-borderless">

  <tbody>
    <tr>
     
      <td className='opacity75  tablepadding'>Available margin</td>
      <td className=' text-end  tablepadding text-primary ' ><h1>{margins?.commodity?.net.toFixed(2)}</h1></td>
   
    </tr>
    <tr>
      
      <td className='opacity75  tablepadding'>Used margin</td>
      <td className=' text-end  tablepadding '><h1>{margins?.commodity?.available.adhoc_margin?.toFixed(2)}</h1></td>
      
    </tr>
    <tr className='border-bottom'>
     
      <td className='opacity75  tablepadding'>Available cash</td>
      <td className=' text-end  tablepadding ' ><h1>{margins?.commodity?.available.cash?.toFixed(2)}</h1></td>
      
    </tr>

    <tr>
      <td className='opacity75  tablepadding' >Opening balance</td>
      <td className='text-end  tablepadding  '>{margins?.commodity?.available.opening_balance?.toFixed(2)}</td>
    </tr>

    <tr>
      <td className='opacity75  tablepadding' >Payin</td>
      <td className='text-end  tablepadding  '>{margins?.commodity?.available.intraday_payin?.toFixed(2)}</td>
    </tr>


    <tr>
      <td className='opacity75  tablepadding' >Payout</td>
      <td className='text-end  tablepadding  '>{margins?.commodity?.utilised.payout?.toFixed(2)}</td>
    </tr>
    
    <tr>
      <td className='opacity75  tablepadding' >SPAN</td>
      <td className='text-end  tablepadding  '>{margins?.commodity?.utilised.span?.toFixed(2)}</td>
    </tr>
    
    <tr>
      <td className='opacity75  tablepadding' >Delivery margin</td>
      <td className='text-end  tablepadding  '>{margins?.commodity?.utilised.delivery?.toFixed(2)}</td>
    </tr>    

    
    <tr>
      <td className='opacity75  tablepadding' >Exposure</td>
      <td className='text-end  tablepadding  '>{margins?.commodity?.utilised.exposure?.toFixed(2)}</td>
    </tr>
    
    <tr className='border-bottom'>
      <td className='opacity75  tablepadding' >Options premium</td>
      <td className='text-end  tablepadding  '>{margins?.commodity?.utilised.option_premium?.toFixed(2)}</td>
    </tr>
    
    <tr>
      <td className='opacity75  tablepadding' >Collateral (Liquid funds)</td>
      <td className='text-end  tablepadding  '>{margins?.commodity?.utilised.liquid_collateral?.toFixed(2)}</td>
    </tr>
    
    <tr>
      <td className='opacity75  tablepadding' >Collateral (Equity)</td>
      <td className='text-end  tablepadding '>{margins?.commodity?.utilised.commodity?.toFixed(2)}</td>
    </tr>
    
    <tr>
      <td className='opacity75  tablepadding' >Total collateral</td>
      <td className='text-end  tablepadding   '>{margins?.commodity?.utilised.stock_collateral?.toFixed(2)}</td>
    </tr>
    
    
    
  </tbody>
</table>
            </div>
            
          </div>
          <div className='col-6' >
          <div className="my-3 secondary-title">
              <span className="me-3">
                <i className="bi bi-droplet"></i>
              </span>
              <span>Commodity</span>
              <div className='float-end' >
                <a className='linkblue mx-2 click' ><span className='mx-1' ><i className="bi bi-record-circle-fill"></i> </span>view statement</a>
                <a className='linkblue click' ><span className='mx-1'><i className="bi bi-info-circle"></i> </span>Help</a>
              </div>
            </div>
            <div className='p-3 border'>
            <table className="table table-hover table-borderless">

  <tbody>
    <tr>
     
      <td className='opacity75  tablepaddingp'>Available margin</td>
      <td className=' text-end  tablepadding '><h1>{margins?.commodity?.net.toFixed(2)}</h1></td>
   
    </tr>
    <tr>
      
      <td className='opacity75  tablepaddingp'>Used margin</td>
      <td className=' text-end  tablepadding '><h1>{margins?.commodity?.available.adhoc_margin.toFixed(2)}</h1></td>
      
    </tr>
    <tr className='border-bottom'>
     
      <td className='opacity75  tablepaddingp'>Available cash</td>
      <td className=' text-end  tablepadding '><h1>{margins?.commodity?.available.cash.toFixed(2)}</h1></td>
      
    </tr>

    <tr>
      <td className='opacity75  tablepaddingp' >Opening balance</td>
      <td className='text-end  tablepadding  '>{margins?.commodity?.available.opening_balance.toFixed(2)}</td>
    </tr>

    <tr>
      <td className='opacity75  tablepaddingp' >Payin</td>
      <td className='text-end  tablepadding  '>{margins?.commodity?.available.intraday_payin.toFixed(2)}</td>
    </tr>


    <tr>
      <td className='opacity75  tablepaddingp' >Payout</td>
      <td className='text-end  tablepadding  '>{margins?.commodity?.utilised.payout.toFixed(2)}</td>
    </tr>
    
    <tr>
      <td className='opacity75  tablepaddingp' >SPAN</td>
      <td className='text-end  tablepadding  '>{margins?.commodity?.utilised.span.toFixed(2)}</td>
    </tr>
    
    <tr>
      <td className='opacity75  tablepaddingp' >Delivery margin</td>
      <td className='text-end  tablepadding  '>{margins?.commodity?.utilised.delivery.toFixed(2)}</td>
    </tr>    

    
    <tr>
      <td className='opacity75  tablepaddingp' >Exposure</td>
      <td className='text-end  tablepadding  '>{margins?.commodity?.utilised.exposure.toFixed(2)}</td>
    </tr>
    
    <tr >
      <td className='opacity75  tablepaddingp' >Options premium</td>
      <td className='text-end  tablepadding  '>{margins?.commodity?.utilised.option_premium.toFixed(2)}</td>
    </tr>
    
    
    
    
    
  </tbody>
</table>
            </div>
        
          </div>
           </div>
      </div>
      
      
      </div>
  )
}

export default Funds