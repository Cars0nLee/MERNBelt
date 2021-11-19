import React from "react"
import axios from "axios"

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    // const {_id} = useParams();
    const {success, _id} = props

    const deletePirate = () => {
        axios.delete(`http://localhost:8000/deletepirate/${_id}`)
        .then(res=>{console.log(res.data)})
        success();
    }

    return (
        <div>
            <br></br>
            <button onClick={deletePirate}>Delete</button>
        </div>
    )
}