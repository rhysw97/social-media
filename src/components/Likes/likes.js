import {useContext, useState} from "react";
import { postRequest } from "../../utils/server-queries.ts";
import LikedBy from "./likedBy";

export default function Likes(props) {
    const [likedBy, setLikedBy] = useState(props.post.likedBy)
    const [likes, setLikes] = useState(props.post.likes)
    //if user likes name gets added to array.
    //if the user clicks when liked 
    //likes is length of array
    console.table(likedBy)
    
    
    const handleLikes = () => {
        if(props.post.likedBy.includes(useContext.username)) {
            //remove user from likedBy and remove like
            setLikes(currentLikes => currentLikes + 1)
            console.log(props.postId)
            postRequest('posts/unLikePost', {postId: props.post.id})
        } else {
            //add user to likedBy and add like
            setLikes(currentLikes => currentLikes + 1)
            console.log(props.post.id)
            postRequest('posts/likePost', {postId: props.post.id})
        }
    }

   
    return(
        <div>
            <div>
                <p onClick={handleLikes}>Like</p>
                <p>{likes}</p>
                    <LikedBy likedBy={props.post.likedBy}/>
            </div>
        </div>
    )
}