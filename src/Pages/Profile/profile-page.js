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
        console.log(profile)
    }
    if(!profile) {
        return(<div>loading</div>)
    } else {
   return(
        <div className=" flex flex-col content-center items-center ">
            <div className="ml-16 w-2/4 bg-gray-400 shadow-black shadow-lg">
                <div className="flex flex-row-reverse justify-end gap-5">
                    <h1 className="w-5 h-8 text-2xl font-bold didact-gotic">{profile.username}</h1>
                    <img className="w-[20%] h-[100%] object-0" src={`http://localhost:5000/uploads/${profile.profilePicture}`} alt="profile picture"/>
                </div>
                
                <p>BIO{profile.about}</p>
                <ol>
                
                {/*profile.genres.map((genre, index) => <li key={index}><p>{genre}</p></li>)*/}
                
                </ol>
            </div>
        </div>
        )
    }
}