import React from "react";
import "./score.css";

function ScoreDisp(props) {
    return  (
<div className="scoreDiv">
    <h2>Score: {props.score} </h2> 
</div>
)
}

export default ScoreDisp