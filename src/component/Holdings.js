import React from "react";
import Holdingchart from "./Holdingchart";

function Holdings() {
  return (
    <div className="p-4 pe-3" >
      <section>
        <div className="d-flex justify-content-between "  >
        <div className="d-flex">
          <h3 className="page-title-small">Holdings(2)</h3>
          <div className="mx-3">
          <select className=" form-select " id="floatingSelectGrid" aria-label="Floating label select example">
        <option selected>All stocks</option>
        <option value="1">Kite only</option>
        <option value="2">Small case</option>
        <option value="3">Mutual funds</option>
      </select>
          </div>
        </div>
        <div className="d-flex align-items-center">
        <div>
        <div className="holdingsearch">
  <label className="m-1 mx-2 " ><i className="bi bi-search"></i></label>
  <input className="inputsearch" placeholder="Search" type="text" />
</div>
        </div>
        <div className="linkblue  mx-3"><a className="linkblue" href="/"><span className="me-1 fs-10 "><i class="bi bi-bag-dash"></i></span>authorization</a></div>
        <div><a className="linkblue" href="/"><span className="me-1 fs-10" ><i class="bi bi-diagram-2"></i></span >family</a></div>
        <div className="mx-3"><a className="linkblue" href="/"><span className="me-1 fs-10" ><i class="bi bi-clipboard-data"></i></span>Analytic</a></div>
        <div><a className="linkblue"   href="/"><span className="me-1 fs-10 " ><i class="bi bi-download"></i></span>Download</a></div>
        </div>
        </div>
      </section>
      <section>
        <div>
          <div>
            <div className="row">
              <div className="col-3">
              <div className="label" >Total investment</div>
              <span className="bigvalue2">85,404</span><span>.00</span>
              </div>
              <div className="col-3">
              <div className="label" >Current value</div>
              <span className="bigvalue2">85,404</span><span >.00</span>
              </div>
              <div className="col-3">
              <div className="label" >Days's P&L</div>
              <span className="bigvalue2">85,404</span><span >.00</span>
              </div>
              <div className="col-3">
              <div className="label" >Total P&L</div>
              <span className="bigvalue2">85,404</span><span  >.00</span>
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
