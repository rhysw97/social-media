import {useState} from "react";
import { postRequest } from "../../utils/server-queries.ts";




export default function Likes(props) {
    const [likedBy, setLikedBy] = useState(prop.post.likedBy)
    const [likes, setLikes] = useState(props.post.likes)
    //if user likes name gets added to array.
    //if the user clicks when liked 
    //likes is length of array
    
    const handleLikes = () => {
        
        setLikes(currentLikes => currentLikes + 1)
        console.log(props.postId)
        postRequest('posts/likePost', {postId: props.post.postId})
        
    }

   
    return(
        <div>
            <div>
                <p onClick={handleLikes}>Like</p>
                <p>{likes}</p>
            </div>
        </div>
    )
}