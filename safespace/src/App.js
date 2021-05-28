import React from "react"
import Header from "./Header"
import {useState, useEffect} from "react"
import axios from "axios"
import './App.css'

function App (){

    const [quotesData, setQuotesData] = useState({text: "", author: ""})


    
    useEffect( () => {
        axios.get("https://api.fisenko.net/quotes?l=en")
        .then(res => console.log(res))
        .catch(err => console.log(err))

        // .then(data => setQuotesData({
        //     quotesData: data
        // }))
    //     .then(res => console.log(res.data))
    }, [])
    
    const submitHandler = e => {
        return(
            <div>
                {/* motivational text from get request here */}
            </div>
        )
    }

    return(
        <div className="app-container">
            <Header />
            <div className="form-container">
            <form className="form" onSubmit={submitHandler}>
                    <input placeholder="just let it out"></input>
                    <button type="submit">and let it go</button>
            </form>
            </div>
        </div>
    )

}

export default App