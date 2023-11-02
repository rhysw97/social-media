import React from "react";
import { postRequest } from "../../utils/server-queries.ts";
import {useNavigate} from 'react-router-dom';
import {USERNAME, LOGGEDIN} from '../../data/contexts.js'

//component to log user out
export default function Logout() {
    //uses navigate hook
    const navigate = useNavigate()

    //
    function handleLogoutResponse() {
        postRequest('logout', {});
        navigate('/')  // navigates user back to home page

    }

    return(
       <div>
            <p onClick={handleLogoutResponse}>Logout</p>
       </div>
    )
}