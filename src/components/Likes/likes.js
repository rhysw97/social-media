import {useContext, useEffect, useState} from "react";
import { postRequest } from "../../utils/server-queries.ts";
import LikedBy from "./likedBy";
import { USERNAME } from "../../data/contexts.js";

export default function Likes(props) {
    const {usernameContext, setUsernameContext} = useContext(USERNAME);
    const [likedBy, setLikedBy] = useState(props.post.likedBy)
    const [likes, setLikes] = useState(props.post.likes)
    const [likeMessage, setLikeMessage] = useState('Like')

    useEffect( () => {
        console.log('username', usernameContext)
        console.log('likedBy', likedBy)
        if(usernameContext) {
            if(likedBy.includes(usernameContext)) {
                setLikeMessage('Unlike')
            } else {
                setLikeMessage('Like')
            }
        }
    })
    //if user likes name gets added to array.
    //if the user clicks when liked 
    //likes is length of array

   
    
    const handleLikes = () => {
        console.log('username',usernameContext )
        
        if(likedBy.includes(usernameContext)) {
            //remove user from likedBy and remove like
            setLikes(currentLikes => currentLikes - 1)
            postRequest('posts/unLikePost', {postId: props.post.id})
            setLikedBy(currentLikedBy => currentLikedBy.filter(user => user !== usernameContext))
            setLikeMessage('Like')
        } else {
            //add user to likedBy and add like
            setLikes(currentLikes => currentLikes + 1)
            console.log(props.post.id)
            postRequest('posts/likePost', {postId: props.post.id})
            setLikedBy(currentLikedBy => [...currentLikedBy, usernameContext])
            setLikeMessage('Unlike')
        }
    }

   
    return(
        <div>
            <div className='flex justify-between'>
                <div className="flex gap-1">
                    <p onClick={handleLikes}>{likeMessage}</p>
                    <p>{likes}</p>
                </div>
                <LikedBy likedBy={props.post.likedBy}/>
            </div>
        </div>
    )
}