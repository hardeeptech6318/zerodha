import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { ordermodal, buysell } from "../../features/api/globalstate";
import { Link } from "react-router-dom";


function Hoverbutton(props) {
    const dispatch = useDispatch();
    let i=props.key
    let ele = props.data

    const showmarketdepth = (item, i) => {
        let id = document.getElementsByClassName(`showmarketdepth${i}`)[0].style
          .display;
    
        if (id === "none") {
          document.getElementsByClassName(`showmarketdepth${i}`)[0].style.display =
            "block";
        } else {
          document.getElementsByClassName(`showmarketdepth${i}`)[0].style.display =
            "none";
        }
      };


  return (
    <div
    key={i}
    className={` hoverbutton${i}  hidemenubutton end-0 top-8  showmenu   position-absolute`}
  >
    <button
      className=" hoverbuttondisign mx-1 bg-primary border-primary text-white"
      style={{ backgroundColor: "#4184f3" }}
      onClick={() => {
        dispatch(buysell(true));
        dispatch(ordermodal(true));
      }}
    >
      B
    </button>
    <button
      className="hoverbuttondisign  text-white bg-red border-red "
      onClick={() => {
        dispatch(buysell(false));
        dispatch(ordermodal(true));
      }}
    >
      S
    </button>
    <button
      className="hoverbuttondisign bgwhite  mx-1"
      onClick={() => showmarketdepth(ele, i)}
    >
      <i className="bi bi-text-center"></i>
    </button>
    <Link type="button" to="/chart"  className="hoverbuttondisign bgwhite "  >
      <i className="bi bi-graph-up-arrow"></i>
    </Link>
    <button className="hoverbuttondisign bgwhite ms-1">
      <i className="bi bi-trash3"></i>
    </button>
    <button className="hoverbuttondisign bgwhite  mx-1">
      <i className="bi bi-three-dots"></i>
    </button>
  </div>
  )
}

export default Hoverbutton