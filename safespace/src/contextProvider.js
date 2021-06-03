import React from "react"
import {useState, useEffect} from "react"
import axios from "axios"

const Context = React.createContext()

function ContextProvider (props) {

    const [quotesData, setQuotesData] = useState()
    const [favQuote, setFavQuote] = useState(props)
    const [newQuote, setNewQuote] = useState(props)
    const [favQuotesArr, setFavQuotesArr] = useState(props)

    useEffect( () => {
        axios.get("https://type.fit/api/quotes")
        .then(res => {
            setQuotesData(res.data)
                console.log(quotesData)
                
        })
        .catch(err => console.log(err))
    }, [])

    const submitHandler = (e) => {
        e.preventDefault()
        console.log("submit!")
        let randomQuote = quotesData[Math.floor(Math.random() * quotesData.length)]
        setNewQuote(randomQuote)
        console.log(newQuote)
        }
            
    // need a button that renders with the quote and allows the user to save the quote to a favorites list
    const handleSave = (e) => {
        e.preventDefault()
        console.log("submit favorite!")
        setFavQuotesArr([])
        setFavQuote(newQuote)
        setFavQuotesArr(prev => [prev.favQuotesArr, favQuote])
        console.log(favQuotesArr)
    }     

    return(
        <Context.Provider value ={{newQuote, submitHandler, handleSave}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}