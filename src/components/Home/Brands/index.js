import React from "react";
import "./style.css";

const Brands = () => {
  return (
    <div className="brand">
      <div className="brands">
        <div className="small-container">
          <div className="row">
            <div className="col-5">
              <img src="https://i.ibb.co/Gfwzz1S/logo-godrej.png" alt="" />
            </div>

            <div className="col-5">
              <img src="https://imgs.search.brave.com/rafftjVRs6KN9tS8CsfO2UiSl1zo9pTIdUGSXfOy3TM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDcwNjQ4/MzgucG5n" alt="" />
            </div>

            <div className="col-5">
              <img src="https://i.ibb.co/3zs234S/logo-coca-cola.png" alt="" />
            </div>

            <div className="col-5">
              <img src="https://i.ibb.co/7Wt343W/logo-paypal.png" alt="" />
            </div>

            <div className="col-5">
              <img src="https://i.ibb.co/GVSNwJD/logo-philips.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
