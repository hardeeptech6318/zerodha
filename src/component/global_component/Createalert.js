import React from "react";

function Createalert() {
  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content" >
            <div class="modal-header justify-content-between p-3">
              <div className="fs-5 fw-bold">New alert</div>
              <div className="text-primary">Help</div>
            </div>
            <div class="modal-body" style={{padding:"25px"}}>
              <div className="pb-3 ">
                <input
                  type="text"
                  className="form-control padding15"
                  placeholder="Alert name"
                />
              </div>
              <div className="row py-3">
                <div className="col-6">
                  <label>Propert</label>
                  <select
                    class="form-select padding15 "
                    aria-label="Default select example"
                    style={{fontSize:"14px"}}
                  >
                    <option selected></option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col-6">
                  <label>Of</label>

                  <div className="searchsidebar  d-flex border">
                    <label className="searchicon  border-end p-2  ">
                      <i className=" bi bi-search"></i>
                    </label>
                    <input
                      className="sidebarsearch ps-3 py-2"
                      placeholder="  "
                      type="text"
                    />

                    <div></div>
                  </div>
                </div>
              </div>

              <div className="row py-3">
                <div className="col-6">
                  <select
                    class="form-select padding15 "
                    aria-label="Default select example"
                    style={{fontSize:"14px"}}
                  >
                    <option selected></option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col-6">
                  
                  <div className="d-flex">
                    <div className="d-flex align-items-center me-4">
                      <input
                        className="me-1"
                        type="radio"
                        value="market"
                        name="market_limit"
                        // onChange={()=>setform({...form,market_limit:'market',sl:''})}
                        // checked={form.market_limit=='market'}
                      />
                      Value
                    </div>
                    <div className="d-flex align-items-center me-2">
                      <input
                        className="me-1"
                        type="radio"
                        value="market"
                        name="market_limit"
                        // onChange={()=>setform({...form,market_limit:'market',sl:''})}
                        // checked={form.market_limit=='market'}
                      />
                      Instrument
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <div className="position-relative mt-3">
                    <label className=" ">
                      Value
                    </label>
                    <input type="number" className="w-100 input_gtt" />
                  </div>
                  <div className="d-flex xxlsmall mt-1 position-absolute">
                    <input
                      type="number"
                      className="w-25 h-25 border  border-0 shadow-sm  "
                    />
                    <span>% of LTP</span>
                  </div>
                </div>
              </div>

              <div className="row pb-3 pt-5">
                <div className="col-6">
                  <label>Propert</label>
                  <select
                    class="form-select padding15 "
                    aria-label="Default select example"
                    style={{fontSize:"14px"}}
                  >
                    <option selected></option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col-6">
                  <label>Of</label>

                  <div className="searchsidebar  d-flex border">
                    <label className="searchicon  border-end p-2  ">
                      <i className=" bi bi-search"></i>
                    </label>
                    <input
                      className="sidebarsearch ps-3 py-2"
                      placeholder="  "
                      type="text"
                    />

                    <div></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-primary py-2 px-3">
                Create
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary py-2 px-3"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Createalert;
