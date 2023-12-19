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
            console.log("Woah")
            //remove user from likedBy and remove like
            setLikes(currentLikes => currentLikes - 1)
            postRequest('posts/unLikePost', {postId: props.post.id})
            setLikedBy(() => likedBy.filter(user => user !== usernameContext))
            console.log(likedBy)
            setLikeMessage('Like')
        } else {
            console.log("yeah")
            //add user to likedBy and add like
            setLikes(currentLikes => currentLikes + 1)
            postRequest('posts/likePost', {postId: props.post.id})
            setLikedBy(() => [...likedBy, usernameContext])
            console.log(likedBy)
            setLikeMessage('Unlike')
        }
    }

    return(
        <div>
            <div className='flex justify-between'>
                <div className="flex gap-1 button-green w-[30%] justify-center">
                    <p onClick={handleLikes}>{likeMessage}</p>
                    <p className="">{likes}</p>
                </div>
                <LikedBy  className="button-green" likedBy={likedBy}/>
            </div>
        </div>
    )
}