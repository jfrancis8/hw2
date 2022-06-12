import React, { useState } from "react";

export default function Login({dispatch}){
    
    const [username,setUsername]=useState("")
    const [password, setPassword]=useState("")
    function handleUsername(e) {setUsername(e.target.value)}
    function handlePassword(e) {setPassword(e.target.value)}
    return(

        <form onSubmit={(e)=>{e.preventDefault(); dispatch({type: 'LOGIN' ,username})}}>
            <label htmlFor="uname"><b>Username</b></label>
            <input type="text" value={username} onChange={handleUsername} name="uname" required id ="user-login"></input>
            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required id = "user-pass"></input>
			<input type="submit" value="Login" disabled={username.length ===0}/>
        </form>
    );
}