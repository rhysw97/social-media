import {useState} from "react";
import UserProfile from "../../data/userProfile";




export default function Post(props) {
    
    const handleLikes = () => {
   
        setLikes(currentLikes => currentLikes + 1)
    }
    const [likes, setLikes] = useState(props.likes)
    return(
        <div>
            <p>{props.username}</p>
            <p>{props.content}</p>
            <div>
                <p onClick={handleLikes}>Like</p>
                <p>{likes}</p>
            </div>
        </div>
    )
}