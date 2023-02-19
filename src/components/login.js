import React from "react";

export default function Login() {
    //sends data submitted to backend. 
    const loginUser = () => {
        const emailInput = document.getElementById('email')
        const passwordInput = document.getElementById('password')

        const email = emailInput.value
        const password = passwordInput.value

       // console.log(email)

        emailInput.value = ''
        passwordInput.value = ''

        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            //sends as JSON string to backend
            body: JSON.stringify({
              email: email,
              password: password
            })
        })
        

    }

    return(
       <div>
            <h1>Login</h1>
            <form>
                <label>
                    Email
                    <input id="email" type="email"/>
                </label>

                <label>
                    Password
                    <input id="password" type="password"/>
                </label>
                <p onClick={loginUser}>Login</p>
            </form>
            <p>Not Registered? <a>click here</a> to sign up</p>
       </div>
    )
}