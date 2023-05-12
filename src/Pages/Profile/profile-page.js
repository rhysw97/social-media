import { useEffect, useState } from "react"
import { getRequest } from "../../utils/server-queries.ts"

export default function ProfilePage(){
    const [profile, setProfile] = useState({})
    useEffect(async () => {
        const response = await getRequest('users/profile')
        setProfile(() => response)
    })
    
    return(
        <div>
            <h1>{profile.username}</h1>
            <img src={profile.profilePicture} alt="profile picture"/>
            <p>{profile.bio}</p>
            <ol>
                {profile.genres.map(genre => <li><p>{genre}</p></li>)}
            </ol>
        </div>
    )
}