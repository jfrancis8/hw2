import React, {useState} from "react";
import Register from "./Register";
import Login from "./Login";
import Logout from "./Logout";


export default function userBar({ user, dispatch }) {
    if (user) {
        return <Logout user={user} setUser={setUser} />;
    } 
    
    else 
    {
        return (<> <Register setUser={setUser} /> <Login setUser={setUser} /> </> );    
    }
}