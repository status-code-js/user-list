import React from "react"

export const Success = ({ count }) => {
    return (
        <div className="success-message">  
            <img src="./assets/success.svg" alt="success-message" />
            <h3>Done!</h3>
            <p>{ count } users have received the invitation.</p>
            <button onClick={() => window.location.reload()} className="btn">Back</button>
        </div>
    )
}