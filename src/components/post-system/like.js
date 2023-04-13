import {useState} from "react";




export default function Post(props) {
    
    const handleLikes = () => {
   
        setLikes(currentLikes => currentLikes + 1)
        
    }
    const [likes, setLikes] = useState(props.likes)
    return(
        <div>
            <div>
                <p onClick={handleLikes}>Like</p>
                <p>{likes}</p>
            </div>
        </div>
    )
}