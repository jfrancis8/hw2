import React, {useState} from "react";
import Register from "./Register";
import Login from "./Login";
import Logout from "./Logout";


export default function userBar({ user, dispatch }) {
    if (user) {
        return <Logout user={user} dispatch={dispatch} />;
    } 
    
    else 
    {
        return (<> <Register dispatch={dispatch} /> <Login dispatch={dispatch} /> </> );    
    }
}