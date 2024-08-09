import React from "react"
import UserContext from "../context/UserContext"
import { useState } from "react"
import { useContext } from "react";


function Login(){
    const [userName, setUserNAme] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext)

    const handleSubmit=(e)=>{
        e.preventDefault();
        setUser({userName, password})
    }
    return(
        <div>
            <h2>Login</h2>
            <input type="text" placeholder="Username" value={userName} onChange={(e)=>setUserNAme(e.target.value)}></input>
            <input type="text" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login