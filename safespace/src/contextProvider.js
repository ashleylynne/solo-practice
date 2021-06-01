import React from "react"
import {useState, useEffect} from "react"
import axios from "axios"

const Context = React.createContext()

function ContextProvider (props) {

    const [quotesData, setQuotesData] = useState()
    const [favQuote, setFavQuote] = useState(props)
    const [newQuote, setNewQuote] = useState()

    useEffect( () => {
        axios.get("https://type.fit/api/quotes")
        .then(res => {
            return(
                setQuotesData(
                    console.log({...res.data})
                )
            )
        })
        .catch(err => console.log(err))
    }, [])

    // how to make this block of code DRYer?
    const submitHandler = (e) => {
        e.preventDefault()
        console.log("submit!")
        axios.get("https://type.fit/api/quotes")
        .then(res => {
            const quote = res.data
            return(
                setNewQuote(
                    console.log({
                        newQuote: quote[Math.floor(Math.random() * quote.length)],
                        text: quote.text,
                        author: quote.author
                    }))
                )
            })
                .catch(err => console.log(err))
                
            }
            
    // need a button that renders with the quote and allows the user to save the quote to a favorites list
    const favoritesSubmitHandler = (e) => {
        e.preventDefault()
        return(
            setFavQuote(prev => ({
                ...prev,
                favQuote: [...prev, favQuote]
            }))
        )
        
    }

    return(
        <Context.Provider value ={{quotesData, newQuote, submitHandler, favoritesSubmitHandler}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}