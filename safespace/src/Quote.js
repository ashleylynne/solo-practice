import React, {useContext} from "react"
import { Context } from "./contextProvider"

function Quote (props) {

    const {newQuote} = useContext(Context)

    return(
        <div>
            <h3>{newQuote}</h3>
            {/* <p>{newQuote.author}</p> */}
            <p>HI</p>
        </div>
    )
}

export default Quote