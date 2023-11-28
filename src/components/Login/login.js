import React,{useState, useContext} from "react";
import { postRequest } from "../../utils/server-queries.ts";
import {BrowserRouter, useNavigate} from 'react-router-dom';
import {USERNAME, LOGGEDIN} from '../../data/contexts.js'



export default function Login() {
    const {usernameContext, setUsernameContext} = useContext(USERNAME);
    const {loggedInContext, setLoggedInContext} = useContext(LOGGEDIN)
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
      
    //click event function to be used to set the Password state to the value of the password input
    const handlePassword = (event) => {
        setPassword(event.target.value);
    };
    
    //function to be used to handle submit event
    const handleSubmit = (event) => {
        event.preventDefault(); //prevents from reloading
        handleLoginResponse() //function defined line 33
    };

    //function async function to handle whether the login is successful of not
    async function handleLoginResponse() {
        //send login data to serve and wait to see whether the server logs the user in
        const response = await postRequest('login', { email, password });
        //if yes
        if(response) {
            //don't need login message element showing login failed
            setLoginMessage(null)
            //set username context (react global variable) to the to responses username attribute
            setUsernameContext(() => response.username)
            setLoggedInContext(() => true)

            console.log('context', response.username,  usernameContext)

            navigate('/post') //navigate to post page (probably should have named this feed)
    
        //if not show element detailing login failure
        } else {
            setLoginMessage(() => <p>Email or password could not be verfied. Please check they have been inputted correctly or click below to create an account</p>)
        }
    }


    //elements to be rendered go within jsx
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