import React from "react";

export default function Login() {
    const loginUser = () => {

    }
    return(
       <div>
            <h1>Login</h1>
            <form>
                <label>
                    Username
                    <input id="username" type="text"/>
                </label>
                <label>
                    Password
                    <input id="username" type="password"/>
                </label>
                <p onclick={loginUser}>Login</p>
            </form>
            <p>Not Registered? <a>click here</a> to sign up</p>
       </div>
    )
}