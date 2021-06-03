import React from "react"
import {useContext} from "react"
import { Context } from "./contextProvider"


function FavQuotes() {
    const {newQuote} = useContext(Context)

    return(
        <div>
            <h3>{newQuote.text}</h3>
            <p>{newQuote.author}</p>
        </div>
    )

}

export default FavQuotes