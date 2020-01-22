import React from "react";
import "./score.css";

function ScoreDisp(props) {
    return  (
<div>
    <h5>Score: {props.score} </h5> 
</div>
)
}

export default ScoreDisp