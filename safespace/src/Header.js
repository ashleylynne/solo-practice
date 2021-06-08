import React, {useContext} from "react"
import FavQuotes from "./FavQuotes"
import {Context} from "./contextProvider"

function Header(){

    const {submitHandler} = useContext(Context)
    return(
        <div className="header-container">
            <h1 className="site-name">
                <span className="safe">Safe</span>
                <span className="space">space</span>
            </h1>
            <div className="form-container">
            <form className="form" onSubmit={submitHandler}>
                    <input placeholder="what's on your mind?"></input>
                    <button type="submit">let it go</button>
                    {/* <button onClick={() => console.log(quotesData)}>test context</button> */}
                    {/* <br></br>                    */}
            </form>
            {/* <br></br> */}
            </div>
        </div>
    )
}

export default Header