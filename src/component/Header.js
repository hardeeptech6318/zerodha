import React, { useEffect,useState } from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import { useGetProfileQuery,useGetMarketwatchQuery } from '../features/api/apiSlice'



function Header() {
  
  const {
    data:profiledata,
    isLoading,
    isSuccess,
    isError,
    error,
    refetch
  } = useGetProfileQuery()
  const [profile, setprofile] = useState([]);

  

  useEffect(()=>{
    isLoading ? setprofile([]) : setprofile(profiledata?.data);
    
  },[profile])

  



  return (
    <div className=" border-bottom px-xxl-5 shadow-sm sticky-top niftyheader">
      
      <div className="row m-0 p-0 align-items-center m-auto  ">
        <div className="leftside m-0    border-end  ">
          <div className="d-flex align-items-center  fw-bold height60">  
            <div className="me-2 ">
              <span className="" >NIFTY</span>
              <span className="text-success mx-1    ">18147.65</span>
              <span className="headerdim opacity75 ">82.65 (0.46%)</span>
            </div>
            <div className="ms-3 ">
              <span className="" >SENSEX</span>
              <span className="text-success mx-1    ">18147.65</span>
              <span className="headerdim opacity75 ">82.65 (0.46%)</span>
            </div>
          </div>
        </div>
        <div className="rightside headerpadding">
          <div className=" headerright">
            <NavLink  className={({isActive}) => (isActive ? "active" : 'none')} to="/">
              <img
                className="logo mx-3"
                src="https://kite.zerodha.com/static/images/kite-logo.svg"
                alt="logo"
              />
            </NavLink>
            <div className="d-flex w-100 justify-content-end align-items-center border-end py-2">
              <div className="mx-3">
                <NavLink  className={({isActive}) => (isActive ? "active" : 'none')} to="/" >
                  <span>Dashboard</span>
                </NavLink>
              </div>
              <div className="mx-3">
                <NavLink  className={({isActive}) => (isActive ? "active" : 'none')} to="/orders" >
                  <span>Orders</span>
                </NavLink>
              </div>
              <div className="mx-3">
                <NavLink  className={({isActive}) => (isActive ? "active" : 'none')} to="/holdings" >
                  <span>Holdings</span>
                </NavLink>
              </div>
              <div className="mx-3">
                <NavLink  className={({isActive}) => (isActive ? "active" : 'none')} to="/position    " >
                  <span>Positions</span>
                </NavLink>
              </div>
              <div className="mx-3">
                <NavLink  className={({isActive}) => (isActive ? "active" : 'none')} to="/Funds" >
                  <span>Funds</span>
                </NavLink>
              </div>
              <div className="mx-3">
                <NavLink  className={({isActive}) => (isActive ? "active" : 'none')} to="/Funds" >
                  <span>Apps</span>
                </NavLink>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-evenly ">
              <div className=" mx-3  ">
                <i className="bi bi-bell"></i>
              </div>
              <div className="">
                <NavLink  className={({isActive}) => (isActive ? "active dropdown-toggle " : 'none')} to="/profile" >
                


                 <div className="dropdown">
  <a className={({isActive}) => (isActive ? "active dropdown-toggle " : 'none')} href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
  <span className=" avatar">HR</span><span className="ms-1 ">{profile?.user_id}</span>
  </a>

  <ul className="dropdown-menu shadow-sm" aria-labelledby="dropdownMenuLink"  style={{minWidth:"240px"}} >
    <li className="border-bottom px-2 py-1"><a className="" href="#">
      <div className=" text-wrap" style={{fontSize:"1rem"}}>Hardeepsinh Ratansinh Parmar</div>
      <div className="label">hardeepsinhparmar2020@gmail.com</div>
      </a></li>
    <li className="px-2 py-1 border-bottom"><a className="" href="#"><span className="me-2"><i className="bi bi-person"></i></span>My profile/<span className="label">settings</span></a></li>
    <li className="px-2 py-1"><a className="" href="#"><span className="me-1 text-primary"><i className="bi bi-record-circle-fill"></i></span>Console</a></li>
    <li className="px-2 py-1"><a className="" href="#"><span className="me-2"><i className="bi bi-coin"></i> </span>Coin</a></li>
    <li className="px-2 py-1"><a className="" href="#"><span className="me-2"><i className="bi bi-telephone"></i></span>Support</a></li>
    <li className="px-2 py-1"><a className="" href="#"><span className="me-2"><i className="bi bi-person-plus"></i></span>Invite friends</a></li>
    <li className="px-2 py-1"><a className="" href="#"><span className="me-2"><i className="bi bi-compass"></i></span>Tour Kite</a></li>

    <li className="px-2 py-1"><a className="" href="#"><span className="me-2"><i className="bi bi-keyboard"></i></span>Keyboard shortcuts</a></li>
    <li className="px-2 py-1"><a className="" href="#"><span className="me-2"><i className="bi bi-journal"></i></span>User manual</a></li>
    <li className="px-2 py-1"><a className="" href="#"><span className="me-2"><i className="bi bi-box-arrow-left"></i></span>Logout</a></li>
    
    
  </ul>
</div>

                 
                </NavLink>
              </div>
              {/* <div className="ms-1 ">EM1078</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
