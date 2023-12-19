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
        <div style={{
            backgroundImage: './../../assets/images/gig-picture.jpg',
        }} className="  flex flex-col ml-16 w-[100%] gap-30">
            <header className=" flex flex-col w-[100%] items-center mx-auto">
                <h1 className="heading mx-auto ">Gig Mates</h1>
            </header>
            
            <div className="flex sm:flex-row items-center w-[100%] flex-col"> 
                <form  className="flex flex-col items-center justify-evenly h-100 w-[60%] gap-8"  onSubmit={handleSubmit}>
                    <h2 className="text-4xl gothic mb-4">Login</h2>
                    <input
                        className="input-field"
                        placeholder="email"
                        id="email"
                        type="text"
                        value={email}
                        onChange={handleEmail}
                    />
            

                    <input
                        className="input-field"
                        placeholder="password"
                        id="password"
                        type="password"
                        value={password}
                        onChange={handlePassword}
                    />
                    <button type="submit" className="button-green">Submit</button>
                    {loginMessage}
                </form>

                <article className="w-[30%] flex flex-col items-center gap-[1.8rem] mt-2">
                    <h2 className="text-4xl gothic mb-4 w-full text-center">About</h2>
                    <p className="gothic text-2xl mb-4">Bringing people together through live music </p>
                    <p className="gothic">We hope to help people make new connections to help make live music more accessable </p>
                    <p className="gothic text-center">Not Registered? </p>
                    <a className="gothic button-green px-2 py-1" onClick={()=> {navigate('/register')}}>Sign Up</a>
                </article>
            </div>
            

       </div>
    )
}