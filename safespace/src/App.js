import React from "react"
import Header from "./Header"
import {useState, useEffect} from "react"
import axios from "axios"
// import Quote from "./Quote"
import './App.css'

function App (){

    const [quotesData, setQuotesData] = useState({text: "", author: ""})

    useEffect( () => {
        axios.get("https://type.fit/api/quotes")
        .then(res => {
            console.log(res.data)
            setQuotesData({quotesData: res.data})
        })
        .catch(err => console.log(err))
    }, [])
    
    const submitHandler = e => {
        e.preventDefault()
        console.log("submit")
        const newQuote = {
            author: quotesData.author,
            text: quotesData.text
        }
        console.log(newQuote)
        // setQuotesData(prevQuotesData => [
        //     ...prevQuotesData,
        //     newQuote
        // ])

    }

    return(
        <div className="app-container">
            <Header />
            <div className="form-container">
            <form className="form" onSubmit={submitHandler}>
                    <input placeholder="what's on your mind?"></input>
                    <button type="submit">let it go</button>
            </form>
            </div>
            {/* <Quote /> */}
        </div>
    )

}

export default App