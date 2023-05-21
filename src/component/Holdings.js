import React from "react";
import Holdingchart from "./Holdingchart";

function Holdings() {
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

      <table class="table table-hover table-bordered table-responsive.">
  <thead>
    <tr className="label">
      <th  scope="col">Instrument</th>
      <th scope="col">Qty</th>
      <th scope="col">Avg. cost</th>
      <th scope="col">LTP</th>
      <th scope="col">Cur. val</th>
      <th scope="col">Net chg.</th>
      <th scope="col">Day chg.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th  scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
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
