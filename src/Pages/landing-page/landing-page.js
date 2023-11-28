
import React, {useContext, useEffect, useState} from "react";
import Login from "../../components/Login/login";
import { LOGGEDIN } from "../../data/contexts";
import ProfilePage from "../Profile/profile-page";

//contains landing page that user will start on
export default function LandingPage() {
    const {loggedInContext} = useContext(LOGGEDIN)
    const backgroundImage = 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg'
    const [view, setView] = useState()

    useEffect(() => {
        console.log(loggedInContext)
        if(loggedInContext) {
            setView(() => <ProfilePage></ProfilePage>)
        } 
        
        else {
            setView(() => <Login></Login>)
        }
    }, [])

    return(
        <div className="flex flex-col">
            <header className="bg-green-500 py-10 mt-5">
            <h1 className="text-white text-center font-extrabold ">Gig Mates</h1>
            </header>
            <div className=" mt-10 bg-slate-900 w-480" styles={{background: `url(${backgroundImage})`}}>
                {view}
            </div>
        </div>
    )
}