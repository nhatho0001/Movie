import React from "react";
import "./conveyorIndex.css"

function PointIndex(props){
    return<li className={props.Check ? "here" : "point"}></li>
}
export default PointIndex;