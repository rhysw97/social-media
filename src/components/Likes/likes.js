import {useState} from "react";




export default function Likes(props) {
    const [likedby, setLikedBy] = useState([])
    //if user likes name gets added to array. cannot like again
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