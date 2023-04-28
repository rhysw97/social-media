import {useState} from "react";




export default function Likes(props) {
    const [likedBy, setLikedBy] = useState([])
    //if user likes name gets added to array.
    //if the user clicks when liked 
    //likes is length of array
    
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