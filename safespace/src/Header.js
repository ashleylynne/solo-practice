import React from "react"
import {Link, Switch, Route} from "react-router-dom"
import FavQuotes from "./FavQuotes"

function Header(){
    return(
        <div className="header-container">
            <div className="nav-container">
            </div>
            <h1 className="site-name">
                <span className="safe">Safe</span>
                <span className="space">space</span>
            </h1>
        </div>
    )
}

export default Header