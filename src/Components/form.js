import React, {useState} from "react"
import {useHistory} from "react-router-dom"
import axios from "axios"

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confpassword, setConfpassword] = useState("");
    const history = useHistory();

    const createPirate = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/newpirate", {
            fname, lname, email, password
        })
        .then(res=>res)
        .catch(err=>err)
        setFname("");
        setLname("");
        setEmail("");
        setPassword("")
        setConfpassword("");
        history.push("/");
    }

    return(
        <div>
            <h2>Register</h2>
            <form onSubmit={createPirate}>
                <label>First Name: </label>
                <input type="text" name="fname" value={fname} onChange={(e)=>{setFname(e.target.value)}}></input>
                <br></br>
                <label>Last Name: </label>
                <input type="text" name="lname" value={lname} onChange={(e)=>{setLname(e.target.value)}}></input>
                <br></br>
                <label>Email: </label>
                <input type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
                <br></br>
                <label>Password:</label>
                <input type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
                <br></br>
                <label>Confirm Password:</label>
                <input type="password" name="confPassword" value={confpassword} onChange={(e)=>{setConfpassword(e.target.value)}}></input>
                <br></br>
                <input type="submit" value="Register"></input>
            </form>
        </div>
        
    )
}