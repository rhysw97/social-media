import React,{useState, useContext} from "react";
import { postRequest } from "../../utils/server-queries.ts";
import {BrowserRouter, useNavigate} from 'react-router-dom';
import {USERNAME} from '../../data/contexts.js'

export default function Login() {
    const {usernameContext, setUsernameContext} = useContext(USERNAME);
    //variables store state of login data 
    //this means it wont be deleted when the login component reloads itself
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginMessage, setLoginMessage] = useState()

    //stores navigation hook to allow moving to other pages
    const navigate = useNavigate()
    
    //function to run when user inputs into email field to update the components the 
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
        console.log(response.loggedin)
        if(response) {
            setLoginMessage(null)
            console.log(response.username)
            setUsernameContext(() => response.username)
            console.log('username', usernameContext)
           
            navigate('/post')
    
        } else {
            setLoginMessage(() => <p>Email or password could not be verfied. Please check they have been inputted correctly or click below to create an account</p>)
        }
    }

    return(
       <div className="bg-green-500 flex flex-col items-center gap-30 mt-20">
          <h1 className="text-4xl mb-20">Login</h1>
           <form  className="flex flex-col items-center justify-evenly h-100" onSubmit={handleSubmit}>
                <div
                className="mb-10">
                    <input
                        placeholder="email"
                        id="email"
                        type="text"
                        value={email}
                        onChange={handleEmail}
                    />
                </div>
                <div  className="mb-10">
                    <input
                        placeholder="password"
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