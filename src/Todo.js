import React, { useState } from "react";

export default function Todo({ title, description }) {

    const date = new Date().toLocaleDateString()
    const startDate = date
    const completeDate = date
    
    const [ checked, setChecked ] = useState(false)
    function handleOnChange(evt) {
        setChecked(evt.target.checked)
        
    }

    return (
        <div>
            <h2>{title}</h2>
            <div>{description}</div>
            <div>{`Date Written: ` + startDate}</div>
            <label htmlFor="complete-checkbox">Completed:</label>
            <input type="checkbox" name="complete-checkbox" value={checked} onChange={handleOnChange}/>
            <div>Completed Date: {checked === true ? completeDate : "Incomplete"}</div>
        </div>
    )
}