import React, {useContext} from "react"
import Header from "./Header"
import Quote from "./Quote"
import {Context} from "./contextProvider"
import './App.css'
import {Switch, Route} from "react-router-dom"
import FavQuotes from "./FavQuotes"
import About from "./About"
import Navbar from "./Navbar"

function App (){

    const {quotesData, submitHandler} = useContext(Context)
    return(
        <div className="app-container">
            <div>
                <Switch>
                    <Route exact path="/">
                    </Route>
                    <Route exact path="/favorites">
                        <FavQuotes />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                </Switch>
            </div>
            <Navbar />
            <Header />
            <Quote />            
        </div>
    )
}

export default App