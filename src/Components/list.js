import React, {useEffect, useState} from "react"
import axios from "axios"
import Display from "../Components/display"
import {useHistory} from "react-router-dom"

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [display, setDisplay] = useState([]);
    const history = useHistory();


    useEffect(()=>{
        axios.get("http://localhost:8000/allpirates")
        .then(res=>{setDisplay(res.data)})
        .catch(err=>err)
    })

    const addPirate = (e) =>{
        e.preventDefault();
        history.push("/allPirates")
    }

    return(
        <div>
            <h2>Pirate Crew</h2>
            <Display display={display}></Display>
            <br></br>
            <button onClick={addPirate}>Add Pirate</button>
        </div>
        
    )
}