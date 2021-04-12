import React, { Component } from "react"
import Header from "./Header"
import './App.css'

class App extends Component{

    state = {
        input: ""
    }

    submitHandler = e => {
        return(
            <div>
                {/* motivational text here */}
            </div>
        )
    }

    render(){
        return(
            <div className="app-container">
               <Header />
               <div className="form-container">
                <form className="form" onSubmit={this.submitHandler}>
                        <input placeholder="just let it out"></input>
                        <button type="submit">and let it go</button>
                </form>
               </div>
            </div>
        )
    }
}

export default App