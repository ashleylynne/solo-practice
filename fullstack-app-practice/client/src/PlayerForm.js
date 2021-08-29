import React, { useContext } from "react"
import { Context } from "./contextProvider"

export default function PlayerForm(){
    const {handleChange, onePlayer} = useContext(Context)

    return(
        <div>
            <form>
                <input 
                    type= "text" 
                    name="player_name" 
                    placeholder="name" 
                    value={onePlayer.name} 
                    onChange={handleChange} />
                <input 
                    type= "text" 
                    name="team_abbreviation" 
                    placeholder="team" 
                    value={onePlayer.team} 
                    onChange={handleChange} />
            </form>
        </div>
    )
}
