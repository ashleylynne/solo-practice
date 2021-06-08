import React from "react"
import Header from "./Header"
import Quote from "./Quote"
import './App.css'
import {Switch, Route} from "react-router-dom"
import FavQuotes from "./FavQuotes"
import About from "./About"
import Navbar from "./Navbar"

function App (){

    return(
        <div className="app-container">
            <Navbar />
            <Header />
            <div>
                <Switch>
                    <Route exact path="/">
                        <Quote />            
                    </Route>
                    <Route exact path="/favorites">
                        <FavQuotes />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default App