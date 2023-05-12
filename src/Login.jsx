import React from "react";

const Login = () => {
    return (
        <>
        <h1>Welcome to the login page</h1>
        <div className="user-form">
            <div className="form-container">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username"/>
            </div>
            <div className="form-container">
                <label htmlFor="password">Password</label>
                <input type="text" name="password" id="password" className="pass-input"/>
            </div>
        </div>
        <button className="submit-btn">Submit form</button>
        
        </>

    )
}

export default Login;