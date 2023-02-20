import React,{useState} from "react";
import { postRequest } from "../utils/server-queries.ts";


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //sends data submitted to backend. 
    const handleEmail = (event) => {
        setEmail(event.target.value);
      };
    
      const handlePassword = (event) => {
        setPassword(event.target.value);
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
    
        postRequest('login', { email, password });
      };

    return(
       <div>
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
            </form>
            <p>Not Registered? <a>click here</a> to sign up</p>
       </div>
    )
}