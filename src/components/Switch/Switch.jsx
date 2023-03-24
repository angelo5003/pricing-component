import React, { useState } from "react";
import "./Switch.css";
const Switch = () => {
  return (
    <div className="switch_outer_container">
      <label className="switch_annual">Annual</label>
      <input type={"checkbox"} className="input" />
      <span className="slider" />
      <label className="switch_monthly">Monthly</label>
    </div>
  );
};

export default Switch;
