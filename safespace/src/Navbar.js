import React from "react"
import {Link} from "react-router-dom"

function Navbar(){
    return(
        <>
            <div className="nav-container">
                <nav className="navbar">
                    <span className="home-button">
                        <Link className="link" to="/"> Home </Link>
                    </span>
                    <span className="favs-button">
                        <Link className="link" to ="/favorites">  Favorite Quotes  </Link>
                    </span>
                    <span className="about-button">
                        <Link className="link" to="/about"> About </Link>
                    </span>
                </nav>
            </div>
        </>
    )
}

export default Navbar