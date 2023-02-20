import React, {useState} from "react";
import { postRequest } from "../utils/server-queries.ts";

//things I need to do in this class
//check that the username hasn't been taken by sending to backend and checking against db

//check that the email is valid

//check the date of birth against todays date to check the user is older than 18

//check password is at least 8 chars has at least a captial, lowercase, number, letter and special char
//check both passwords are the same
//probably look into terms and conditions as can store data

export default function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
   
    const validation = {
        email: false,
        dateOfBirth: false,
        passwordsMatch: false
    }
  

     //sends data submitted to backend. 
     const handleUsername = (event) => {
        setUsername(event.target.value);
      };

     const handleEmail = (event) => {
        setEmail(event.target.value);

        //check if email is valid
      };

      const handleDateOfBirth = (event) => {
        setDateOfBirth(event.target.value);
         //check if date of birth is at least 18 years before current date

      };
    
      const handlePassword = (event) => {
        setPassword(event.target.value);
      };

      const handleConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
        //check if password is equal to other password
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        if(validation.dateOfBirth && validation.email && validation.passwordsMatch) {
            postRequest('register', { username, email, dateOfBirth,password });
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
                        value={username}
                        onChange={handleUsername}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="text"
                        value={email}
                        onChange={handleEmail}
                    />
                </div>
                <div>
                    <label htmlFor="dob">Email</label>
                    <input
                        id="dob"
                        type="date"
                        value={dateOfBirth}
                        onChange={handleDateOfBirth}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={handlePassword}
                    />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Password</label>
                    <input
                        id="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={handleConfirmPassword}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
       </div>
    )
}