import React, {useState, useRef} from "react";
import { postRequest } from "../../utils/server-queries.ts";
import Password from "./password.js";

//check that the username hasn't been taken by sending to backend and checking against db

//check that the email is valid
//probably look into terms and conditions as can store data

export default function Register() {
    const usernameRef = useRef();
    const emailRef = useRef();
    const dateOfBirthRef = useRef();
    const [userPassword, setUserPassword] = useState();
    const [currentIsValid, setCurrentIsValid] = useState();

    const validation = {
        email: false,
        dateOfBirth: false,
        passwordValid: false,
        passwordsMatch: false
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        

        if(currentIsValid && Object.values(validation).every(value => value)) {
            const data = { 
                username: usernameRef.target.value, 
                email: usernameRef.target.value,
                dateOfBirth: dateOfBirthRef.target.value,
                password: userPassword
            };
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
                <Password passwordState={setUserPassword} isValidState={setCurrentIsValid}/>
                <button type="submit">Submit</button>
            </form>
       </div>
    )
}