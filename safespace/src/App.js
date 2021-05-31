import React from "react"
import Header from "./Header"
// import Quote from "./Quote"
import './App.css'

function App (){

    // const [quotesData, setQuotesData] = useState()
    
    // const submitHandler = e => {
    //     e.preventDefault()
    //     console.log("submit")
    //     // const newQuote = {
    //     //     author: quotesData.author,
    //     //     text: quotesData.text
    //     // }
    //     // setQuotesData(prevQuotesData => [
    //     //     ...prevQuotesData,
    //     //     newQuote
    //     // ])

    // }

    return(
        <div className="app-container">
            <Header />
            <div className="form-container">
            <form className="form" onSubmit={console.log("submit")}>
                    <input placeholder="what's on your mind?"></input>
                    <button type="submit">let it go</button>
            </form>
            </div>
            {/* <Quote /> */}
        </div>
    )
}

export default App