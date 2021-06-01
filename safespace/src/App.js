import React, {useContext} from "react"
import Header from "./Header"
import Quote from "./Quote"
import {Context} from "./contextProvider"
// import {Link} from "react-router-dom"
import './App.css'

function App (){

    const {quotesData, submitHandler} = useContext(Context)

    return(
        <div className="app-container">
            <Header />
            <div className="form-container">
            <form className="form" onSubmit={submitHandler}>
                    <input placeholder="what's on your mind?"></input>
                    <button type="submit">let it go</button>
                    <button onClick={() => console.log(quotesData)}>test context</button>
                    <br></br>
                    {/* <button onClick={() => {favoritesSubmitHandler}}></button> */}
                    
            </form>
            {/* <Link to ="/favorites">
                Favorite Quotes
            </Link> */}
            <Quote />
            </div>
        </div>
    )
}

export default App