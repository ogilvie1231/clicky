import React from "react";
import "./style.css";

const Cards = (props) => {
    return (
        <div className="imgDiv">
            <img onClick={() => {
                props.clicked (props.id)
            }} src={props.url} alt="star-wars-photo"/>
            {/* <h3>Card {props.url} {props.type}</h3> */}
        </div>
    )
}

export default Cards; 