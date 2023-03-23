import React from "react";
import { useNavigate } from "react-router-dom";
import Login from "../components/login";

export default function LandingPage() {
   
  
    return(
        <div className="landing-page">
            <h1>Gig Mates</h1>
            <Login></Login>
        </div>
    )
}