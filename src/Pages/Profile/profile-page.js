import { useEffect, useState } from "react"
import { getRequest, postRequest } from "../../utils/server-queries.ts"
import Modal from "../../components/UI/modal/modal.js"
import Password from "../register/password.js"

export default function ProfilePage(){
    const [profile, setProfile] = useState({})
    const [passwordModalActive, setPasswordModalActive] = useState(false)
    const [password, setPassword] = useState('')
    const [currentIsValid, setCurrentIsValid] = useState(false)
    
    useEffect(() => {
        getProfile()
    },[])

    async function updatePassword() {
        console.log(password)
        if(currentIsValid) {
            postRequest('/profile/update-password', {password: password})
        } else {
            alert('There was in issue with your password. Please check you have met the password critera')
        }
    }

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
                <p className=" w-[100%] button-green mb-5" onClick={()=> {setPasswordModalActive(true)}}>Change Password</p>
                <Modal show={passwordModalActive} close={()=> setPasswordModalActive(false)} content={
                    <div>
                        
                        <Password setPasswordState={setPassword} setIsPasswordValid={setCurrentIsValid}/>
                        <button onClick={updatePassword} className="button-green" type="submit">Submit</button>
                    </div>
                    
                } title={"Change Password"}/>
                {}
                {/*profile.genres.map((genre, index) => <li key={index}><p>{genre}</p></li>)*/}
                
                </ol>
            </div>
        </div>
        )
    }
}