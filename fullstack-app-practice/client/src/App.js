import React, { useContext } from "react"
import {Context} from "./contextProvider"
import Player from "./Player"
import PlayerForm from "./PlayerForm"

function App(){

    const {players, handlePost} = useContext(Context)
    const mappedThroughPlayers = players.map(player => <Player {...player} key = {player.player_name} />)    

    return(
        <div>
            <h1>NBA Favs</h1>
            <PlayerForm />
            <button onClick={handlePost} type="submit">submit</button>
           {mappedThroughPlayers}
        </div>
    )
}

export default App