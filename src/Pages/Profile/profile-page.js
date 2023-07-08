import { useEffect, useState } from "react"
import { getRequest } from "../../utils/server-queries.ts"

export default function ProfilePage(){
    const [profile, setProfile] = useState({})
    useEffect(() => {
        getProfile()
    },[])

    async function getProfile() { 
        const response = await getRequest('profile/get-profile')
        console.log('response', response)
        setProfile(()=> response)
    }
    if(!profile) {
        return(<div>loading</div>)
    } else {
   return(
        <div className=" flex flex-col content-center items-center">
            <div className="ml-16 w-2/4">
                <h1>You {profile.username}</h1>
                <img src={`http://localhost:5000/uploads/${profile.profilePicture}`} alt="profile picture"/>
                <p>BIO{profile.bio}</p>
                <ol>
                {
                //{profile.genres.map((genre, index) => <li key={index}><p>{genre}</p></li>)}
                }
                </ol>
            </div>
        </div>
        )
    }
}