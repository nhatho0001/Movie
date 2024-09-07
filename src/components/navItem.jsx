import React from "react";
import './navItem.css'
import { Link } from "react-router-dom";
function NavzItem(props){
    return <li className="px-4"> <Link to = {props.link}>{props.name}</Link></li>
}

export default NavzItem;