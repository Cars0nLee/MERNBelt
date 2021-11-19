import React, {useEffect, useState} from "react"
import {useHistory} from "react-router-dom"
import axios from "axios"


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [treasure, setTreasure] = useState("");
    const [phrase, setPhrase] = useState("");
    const [crew, setCrew] = useState("");
    const [peg, setPeg] = useState(true);
    const [eye, setEye] = useState(true);
    const [hook, setHook] = useState(true);
    const [errors, setErrors] = useState("");
    const history = useHistory();

    const createPirate = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/newpirate", {
            name, image, treasure, phrase, crew, peg, eye, hook
        })
        .then(res=>{
            if(res.data.errors){
                setErrors(res.data.errors)
            }
            else{
                history.push("/")
            }
        })
        .catch(err=>err)
        setName("");
        setImage("");
        setTreasure("");
        setPhrase("");
        setCrew("");
    }

    const crewBoard = (e) =>{
        e.preventDefault();
        history.push("/")
    }

    return(
        <div>
            <h2>Add Pirate</h2>
            <form onSubmit={createPirate}>
                <p style={{color: "red"}}>{errors.name?.message}</p>
                <p style={{color: "red"}}>{errors.image?.message}</p>
                <p style={{color: "red"}}>{errors.treasure?.message}</p>
                <p style={{color: "red"}}>{errors.phrase?.message}</p>
                <p style={{color: "red"}}>{errors.crew?.message}</p>
                <label>Pirate Name: </label>
                <br></br>
                <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}></input>
                <br></br>
                <label>Image Url: </label>
                <br></br>
                <input type="url" name="image" value={image} onChange={(e)=>{setImage(e.target.value)}}></input>
                <br></br>
                <label># of Treaseure Chests: </label>
                <br></br>
                <input type="number" name="treasure" value={treasure} onChange={(e)=>{setTreasure(e.target.value)}}></input>
                <br></br>
                <label>Pirate Catch Phrases: </label>
                <br></br>
                <input type="text" name="phrase" value={phrase} onChange={(e)=>{setPhrase(e.target.value)}}></input>
                <br></br>
                <label>Crew Position: </label>
                <select name="crew" value={crew} onChange={(e)=>{setCrew(e.target.value)}}>
                    <option selected hidden behind>Select Position</option>
                    <option value="Captain">Captain</option>
                    <option value="First Mate">First Mate</option>
                    <option value="Quarter Master">Quarter Master</option>
                    <option value="Boatswain">Boatswain</option>
                    <option value="Powder Monkey">Powder Monkey</option>
                </select>
                <br></br>
                <label>Peg Leg</label>
                <input type="checkbox" name="peg" checked={peg} onChange={(e)=>setPeg(!peg)}></input>
                <br></br>
                <label>Eye Patch</label>
                <input type="checkbox" name="eye" checked={eye} onChange={(e)=>setEye(!eye)}></input>
                <br></br>
                <label>Hook Hand</label>
                <input type="checkbox" name="hook" checked={hook} onChange={(e)=>setHook(!hook)}></input>
                <br></br>
                <input type="submit" value="Add Pirate"></input>
            </form>
            <br></br>
            <button onClick={crewBoard}>Crew Board</button>
        </div>
    )
}