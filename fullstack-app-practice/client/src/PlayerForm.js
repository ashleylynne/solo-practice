import React, { useContext } from "react"
import { Context } from "./contextProvider"

export default function PlayerForm(){
    const {handleChange, name} = useContext(Context)

    return(
        <div>
            <form>
                <input 
                    type= "text" 
                    name="player_name" 
                    placeholder="name" 
                    value={name} 
                    onChange={handleChange} />
                <input 
                    type= "text" 
                    name="team_abbreviation" 
                    placeholder="team" 
                    value={name} 
                    onChange={handleChange} />
            </form>
        </div>
    )
}
