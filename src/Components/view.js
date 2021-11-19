import React, {useEffect, useState} from "react"
import axios from "axios"
import {useParams} from "react-router-dom"
import {useHistory} from "react-router-dom"

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const {_id} = useParams();
    const [pirate, setPirate] = useState([]);
    const history = useHistory();

    useEffect(()=>{
        axios.get(`http://localhost:8000/pirate/${_id}`)
        .then(res=>{setPirate(res.data.pirate)})
    }, [])

    const viewAll = (e) =>{
        e.preventDefault();
        history.push("/")
    }

    const addPirate = (e) =>{
        e.preventDefault();
        history.push("/allPirates")
    }

    return(
        <div>
            <h1>{pirate.name}</h1>
            <img src={pirate.image} width="200" height="200" alt="profile"></img>
            <h1>"{pirate.phrase}"</h1>
            <h1>About</h1>
            <h3>Position: {pirate.crew}</h3>
            <h3>Treasures: {pirate.treasure}</h3>
            <h3>Peg Leg: {pirate.peg? "Yes":"No"}</h3>
            <h3>Eye Patch: {pirate.eye? "Yes":"No"}</h3>
            <h3>Hook Hand: {pirate.hook? "Yes":"No"}</h3>
            <br></br>
            <button onClick={viewAll}>Go Back</button>
            <br></br>
            <br></br>
            <button onClick={addPirate}>Add Pirate</button>
        </div>
    )
}