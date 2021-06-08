import React from "react"
import {useState, useEffect} from "react"
import axios from "axios"

const Context = React.createContext()

function ContextProvider (props) {

    let initialFavQuotes = []
    const [quotesData, setQuotesData] = useState()
    const [favQuote, setFavQuote] = useState({text: "", author: "", id:0})
    const [newQuote, setNewQuote] = useState({text: "", author: "", id:0})
    const [favQuotesArr, setFavQuotesArr] = useState(initialFavQuotes)

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
    

    // favorites list
    const handleSave = () => {
        console.log("submit favorite!")
        console.log("New Quote is" + newQuote.text )
        setFavQuote(newQuote)
        console.log("FavQuote is" + favQuote.text )
        // newQuote.id = Math.random() * quotesData.length //regenerate the quotes id
        setFavQuotesArr(prev => [...prev, newQuote]) //we had to destructure prev.
        localStorage.getItem("favQuotes")
        localStorage.setItem(`favQuotes` , `{"favQuotes": [${favQuotesArr.map(item => `${JSON.stringify(item)}`)}]}`)
        console.log(favQuotesArr)
        return
    } 
    const clearFavQuotes = () => {
        localStorage.setItem("favQuotesArr", [])
        return
    }
            
    // need a button that renders with the quote and allows the user to save the quote to a favorites list
    // const handleSave = (favQuote) => {
    //     console.log("submit favorite!")
    //     setFavQuote(newQuote)
    //     // setFavQuotesArr(favQuotesArr => favQuotesArr.concat(favQuote))
    //     // setFavQuotesArr(favQuote => [...favQuotesArr, favQuote])
    //     // setFavQuotesArr(favQuotesArr => [...favQuotesArr, favQuote])
    //     setFavQuotesArr(favQuotesArr.concat(localStorage.getItem("favQuotesArr", favQuote)))
    //     // localStorage.setItem("favQuotesArr", JSON.stringify(favQuotesArr))
    //     // localStorage.setItem("favQuotes", favQuotesArr)
    //     console.log(favQuotesArr)
    // }     

    return(
        <Context.Provider value ={{newQuote, favQuote, favQuotesArr, clearFavQuotes, submitHandler, handleSave}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
