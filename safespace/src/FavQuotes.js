import React from "react"
import {useContext} from "react"
import { Context } from "./contextProvider"

// function FavQuotes() {
//     const {favQuote, favQuotesArr, clearFavQuotes} = useContext(Context)
//     let quotesArray= favQuotesArr.map(quote => {
//         return(
//             <div>
//                 <Quote key = {<h3>{quote.text}</h3>} author={<p>{quote.author}</p>} />
//             </div>
//         )
//     })

//     return(
//         <div>
//             <h1>Favorites</h1>
//             {quotesArray}            
//         </div>

//     )

// }

function FavQuotes(){
    const {favQuotesArr, clearFavQuotes} = useContext(Context)
    localStorage.getItem("favQuotes")
    console.log(JSON.parse(`[{"text": "No new quotes"}]`))
    return (
        <>
        <h1 className="favs-header">Favorites</h1>
            <div className="quotes">
                {favQuotesArr.map(item => 
                    <div>
                        <h3>{item.text}</h3>
                        <p>{item.author}</p>
                    </div>
                    )
                }  
                <form>
                <button onClick={clearFavQuotes}>
                    Clear Favorite Quotes
                </button>
                </form>
            </div>
        </>
    )
}

export default FavQuotes
