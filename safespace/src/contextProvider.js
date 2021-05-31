import React from "react"
import {useState, useEffect} from "react"
import axios from "axios"

const Context = react.CreateContext()

ContextProvider = (props) => {

    const [quotesData, setQuotesData] = useState()

    useEffect( () => {
        axios.get("https://type.fit/api/quotes")
        .then(res => {
            setQuotesData(
                res.data
            )
            console.log(quotesData)
        })
        .catch(err => console.log(err))
    }, [])

    return(
        <Context.Provider value ={{quotesData}}>
            {props.children}
        </Context.Provider>
    )
}


export {ContextProvider, Context}

