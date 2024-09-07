import React from "react";
import NavzItem from "../components/navItem";
import "./header.css"
import NavListItemData from "../data/NavListItemData";
import Search from "../components/sarch";

function Header(){
    return (<header>
        <div>
            <a className="Logo" href="/">Cinema</a>
        </div>
        
        <ul className="nav">
            {NavListItemData.map((item => {
                return <NavzItem key = {item._id} link = {item.link} name = {item.name.toUpperCase()} />
            }))}
        </ul>
        <div className="search-sigin">
            <Search></Search>
            <button className="mx-3">Sign In</button>
        </div>
    </header>)
}

export default Header;