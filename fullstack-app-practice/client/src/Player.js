import React, { useContext, useState } from "react"
import { Context } from "./contextProvider"
import PlayerForm from "./PlayerForm"

function Player(props){

    const {player_name, team_abbreviation, _id} = props
    const {handleDelete, handleUpdate, setOnePlayer} = useContext(Context)
    const [editToggle, setEditToggle] = useState(false)

    return(
        <>
            <div className="player">
                {!editToggle ?
                    <>
                        <h3>
                            <span>
                                {player_name}&nbsp;
                            </span>
                            <span>
                                {team_abbreviation}
                            </span>
                        </h3>
                        <button onClick={() => handleDelete(_id)}>delete</button>
                        <button onClick={(e) => {
                            const children = e.target.parentElement.children
                            setOnePlayer({
                                name: children[0].children[0].innerText,
                                team: children[0].children[1].innerText,
                                id: _id
                            })
                            setEditToggle(prevToggle => !prevToggle)
                        }}>
                            edit
                            </button>
                    </> 
                    :
                    <>
                        <h3>
                            <span>
                                {player_name}&nbsp;
                            </span>
                            <span>
                                {team_abbreviation}
                            </span>
                        </h3>
                        <PlayerForm 
                            name = {player_name}
                            team = {team_abbreviation}
                            // submit = {(e) => {
                            //     e.preventDefault()
                            //     handleUpdate(player._id)
                            //     setOnePlayer({
                            //         player_name: "",
                            //         team_abbreviation: "",
                            //     })
                            // }}
                        />
                        <button onClick={handleUpdate}>submit edit</button>
                        <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>close</button>
                    </>

                }
            </div>
        </>
    )
}


export default Player