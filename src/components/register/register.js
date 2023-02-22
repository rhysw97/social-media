import React, {useState, useRef} from "react";
import { postRequest } from "../../utils/server-queries.ts";
import Password from "./password.js";

//things I need to do in this class
//check that the username hasn't been taken by sending to backend and checking against db

//check that the email is valid

//check the date of birth against todays date to check the user is older than 18

//check password is at least 8 chars has at least a captial, lowercase, number, letter and special char
//check both passwords are the same
//probably look into terms and conditions as can store data

export default function Register() {
    const usernameRef = useRef();
    const emailRef = useRef();
    const dateOfBirthRef = useRef();
    let password;

    const validation = {
        email: false,
        dateOfBirth: false,
        passwordValid: false,
        passwordsMatch: false
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = { 
            username: usernameRef.target.value, 
            email: usernameRef.target.value,
            dateOfBirth: dateOfBirthRef.target.value,
            password
        };

        if(validation.dateOfBirth && validation.email && validation.passwordsMatch && validation.passwordValid) {
           postRequest('register', data)
        }
    };

    return(
       <div>
           <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        ref={usernameRef}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="text"
                        ref={emailRef}
                    />
                </div>
                <div>
                    <label htmlFor="dob">Email</label>
                    <input
                        id="dob"
                        type="date"
                        ref={dateOfBirthRef}
                    />
                </div>
                <Password/>
                <button type="submit">Submit</button>
            </form>
       </div>
    )
}