import React, {useState, useRef} from "react";
import { postRequest } from "../../utils/server-queries.ts";
import Password from "./password.js";

//check that the username hasn't been taken by sending to backend and checking against db

//check that the email is valid
//probably look into terms and conditions as can store data

export default function Register() {
    const usernameRef = useRef();
    const emailRef = useRef();
    const [dateOfBirth, setDateOfBirth] = useState();
    const [userPassword, setUserPassword] = useState();
    const [currentIsValid, setCurrentIsValid] = useState();
    const [ageMessage, setAgeMessage]  = useState();
    const [emailMessage, setEmailMessage] = useState()
    let validAge = false;
    let emailValid = false;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    function findAge(dob) {
        const currentDate = new Date()
        const birthDate = new Date(dob)
        let age = currentDate.getFullYear() - birthDate.getFullYear();
        const month = currentDate.getMonth() - birthDate.getDate();
        console.log(typeof age)
        if(month < 0 || (month === 0 && currentDate.getDate() < birthDate.getDate)) {
            age--
        }
        return age;
    }
    
    const validation = {
        email: false,
        dateOfBirth: false,
        passwordValid: false,
        passwordsMatch: false
    }

    const handleEmail = event => {
        emailValid = (emailRegex.test(event.target.value))
        if(emailValid) {
            setEmailMessage(null)
        } else {
            setEmailMessage(<p>Not a valid email</p>)
        }
    }

    const handleDateOfBirth = (event) => {
        setDateOfBirth(event.target.value)
        const userAge = findAge(event.target.value);
        if(userAge >= 18) {
            validAge = true;
            setAgeMessage(null)
        } else {
            validAge = false;
            setAgeMessage(<p>You must be 18 or over to register</p>)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if(currentIsValid && validAge && emailValid) {
            const data = { 
                username: usernameRef.target.value, 
                email: usernameRef.target.value,
                dateOfBirth: dateOfBirth,
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
                    {emailMessage}
                </div>
                <div>
                    <label htmlFor="dob">Date Of Birth</label>
                    <input
                        id="dob"
                        type="date"
                        onChange={handleDateOfBirth}
                    />
                    {ageMessage}
                </div>
                <Password setPasswordState={setUserPassword} setIsPasswordValid={setCurrentIsValid}/>
                <button type="submit">Submit</button>
            </form>
       </div>
    )
}