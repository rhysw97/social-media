import React from "react";
import { postRequest } from "../../utils/server-queries.ts";
import {useNavigate} from 'react-router-dom';


export default function Logout() {

    const navigate = useNavigate()

    function handleLogoutResponse() {
        postRequest('logout', {});
        navigate('/')        
    }

    return(
       <div>
            <p onClick={handleLogoutResponse}>Logout</p>
       </div>
    )
}