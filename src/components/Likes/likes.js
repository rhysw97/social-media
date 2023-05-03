import {useContext, useState} from "react";
import { postRequest } from "../../utils/server-queries.ts";
import LikedBy from "./likedBy";

export default function Likes(props) {
    console.log(props.post)
    const [likedBy, setLikedBy] = useState(props.post.likedBy)
    const [likes, setLikes] = useState(props.post.likes)
    //if user likes name gets added to array.
    //if the user clicks when liked 
    //likes is length of array
    
    
    const handleLikes = () => {
        if(likedBy.includes(useContext.username)) {
            //remove user from likedBy and remove like
            setLikes(currentLikes => currentLikes + 1)
            console.log(props.postId)
            //postRequest('posts/unLikePost', {postId: props.post.postId})
        } else {
            //add user to likedBy and add like
            setLikes(currentLikes => currentLikes + 1)
            console.log('hi',props.post._id)
           // postRequest('posts/likePost', {postId: props.post._id})
        }
    }

   
    return(
        <div>
            <div>
                <p onClick={handleLikes}>Like</p>
                <p>{likes}</p>
                    <LikedBy likedBy={props.likedBy}/>
            </div>
        </div>
    )
}