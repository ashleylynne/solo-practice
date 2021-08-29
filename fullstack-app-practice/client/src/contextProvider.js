import React from "react"
import { useEffect, useState } from "react"
import axios from "axios"

const Context = React.createContext()

function ContextProvider(props){

    const {player_name, team_abbreviation, _id} = props
    const [players, setPlayers] = useState([])
    // const [onePlayer, setOnePlayer] = useState({name: {player_name} || "", team: {team_abbreviation} || "", id: {_id} || ""})
    const [onePlayer, setOnePlayer] = useState({name: player_name, team: team_abbreviation, id: _id})

    useEffect(() => {
        getPlayersData()
    }, [])

    const getPlayersData = () => {
        axios.get("/players")
            .then(res => {
                setPlayers(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    const handleChange = e => {
        const {name, value} = e.target
        setOnePlayer(prevState => ({
            ...prevState,
            [name]: value
        }))
        console.log(onePlayer)    
    }

    const handlePost = e => {
        e.preventDefault()
        console.log("new post!")
        axios.post("/players", onePlayer)
            .then(res => {
                getPlayersData()
            })
            console.log(onePlayer)
    }

    const handleDelete = id => {
        console.log("deleted!")
        axios.delete(`/players/${id}`)
            .then(res => {
                console.log(res)
                getPlayersData()
            })
            .catch(err => console.log(err))
    }

    const handleUpdate = id => {
        axios.put(`players/${id}`, onePlayer)
            .then(res => {
                setOnePlayer(res.data)
                getPlayersData()
                console.log(onePlayer)
            })
    }

    return(
        <Context.Provider value={{players, handleChange, handleUpdate, handlePost, handleDelete, onePlayer, setOnePlayer}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}


