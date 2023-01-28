import React from "react"

export const Success = ({ count }) => {
    return (
        <div className="success-message">  
            <img src="./assets/success.svg" alt="succes-message" />
            <h3>Done!</h3>
            <p>All { count } users have received the invitation.</p>
            <button className="btn">Back</button>
        </div>
    )
}