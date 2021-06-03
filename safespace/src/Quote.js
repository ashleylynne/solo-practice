import React, {useContext} from "react"
import { Context } from "./contextProvider"

function Quote (props) {

    const {newQuote, handleSave} = useContext(Context)

    return(
        <div>
            <h3>{newQuote.text}</h3>
            <p>{newQuote.author}</p>
            <button onClick={handleSave}>Add to favorites</button>
        </div>
    )
}

export default Quote