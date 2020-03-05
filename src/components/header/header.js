import React from "react";
import "./header.css";

function HeaderDisp() {
  return (
    <div className="headerDiv">
      <h1>Clicky Game!</h1>
      <h3>
        Click an image to earn a point. Your target score is 12 but if you click
        the same image twice, you lose! Click an image below to get started and
        remeber, don't click the same image twice!
      </h3>
    </div>
  );
}

export default HeaderDisp;
