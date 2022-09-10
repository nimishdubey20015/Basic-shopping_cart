import React from "react";

export default function Footer(props) {
  return (
    <div className="row fixed-bottom">
      <button className="btn col-2" onClick={() => 
       props.resetData()
    } style={{backgroundColor:'#555555' }}><b>Reset</b></button>
      <div className="col-8 bg-dark text-white text-center">Total Amount ₹{props.totalAmount}</div>
      <button className="btn btn-primary col-2">Pay Now</button>
    </div>
  );
}
