import React, {useState} from "react"
import Delete from "../Components/delete"
import {Link} from "react-router-dom"

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    const [pirate, setPirate] = useState([]);

    const removeFromDom = (Id) => {
        setPirate(pirate.filter(pirate=>pirate._id !== Id))
    }

    return(
        <div>
            {props.display.map((display, id) => {
                return <div>
                        <img src={display.image} alt="profile" width="200" height="100" />
                        <h3 key={id}>{display.name}</h3>
                        <Link to={`/pirate/${display._id}`}>View Pirate</Link>
                        <Delete _id={display._id} success={removeFromDom}></Delete>
                        <br></br>
                    </div>
            })}
        </div>
    )
}
