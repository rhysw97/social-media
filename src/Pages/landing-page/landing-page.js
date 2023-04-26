import React from "react";
import { useNavigate } from "react-router-dom";
import Login from "../../components/Login/login";

export default function LandingPage() {
    const backgroundImage = 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg'
   
  
    return(
        <div className="flex flex-col">
            <header className="bg-green-600 py-10 mt-5">
            <h1 className="text-white text-center">Gig Mates</h1>
            </header>
            <div className=" mt-10 bg-slate-900 w-480" styles={{background: `url(${backgroundImage})`}}>
                <Login></Login>
            </div>
        </div>
    )
}