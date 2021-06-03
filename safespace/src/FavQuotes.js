import React from "react"
import {useContext} from "react"
import { Context } from "./contextProvider"


function FavQuotes() {
    const {favQuote, favQuotesArr} = useContext(Context)

    return(
        <div>
            <h3>{favQuote.text}</h3>
            <p>{favQuote.author}</p>
        </div>
    )

}

export default FavQuotes