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
              <img src="https://i.ibb.co/vjrRZFM/logo-oppo.png" alt="" />
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
