import {useState} from "react";
import UserProfile from "../../data/userProfile";



export default function Post(props) {
    
    const [likes, setLikes] = useState(props)
    return(
        <div>
            <p>{props.username}</p>
            <p>{props.content}</p>
            <div>
                <p onClick={() => {
                    console.log('click')
                    console.log(likes)
                    setLikes(currentLikes => currentLikes + 1)
                }}>Like</p>
                <p>{likes}</p>
            </div>
        </div>
    )
}