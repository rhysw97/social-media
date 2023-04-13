import React,{useState} from "react";
import { postRequest } from "../../utils/server-queries.ts";
import {BrowserRouter, useNavigate} from 'react-router-dom';


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginMessage, setLoginMessage] = useState()
    const navigate = useNavigate()
    
    //sends data submitted to backend. 
    const handleEmail = (event) => {
        setEmail(event.target.value);
      };
    
      const handlePassword = (event) => {
        setPassword(event.target.value);
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        handleLoginResponse()
      };

    async function handleLoginResponse() {
        const response = await postRequest('login', { email, password });
        console.log(response)
        if(response) {
            setLoginMessage(null)
            navigate('/post')
        } else {
            setLoginMessage(currentMessage => <p>Email or password could not be verfied. Please check they have been inputted correctly or click below to create an account</p>)
        }
    }

    return(
       <div>
          <h1>Login</h1>
           <form onSubmit={handleSubmit}>
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
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={handlePassword}
                    />
                </div>
                <button type="submit">Submit</button>
                {loginMessage}
            </form>
            <p>Not Registered? <a onClick={()=> {navigate('/register')}}>click here</a> to sign up</p>
       </div>
    )
}