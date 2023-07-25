import { useEffect, useRef, useState } from "react";
import {getRequest, postRequest} from '../../utils/server-queries.ts'
import Comment from "./comment.js";

export default function PostComment(props) {
    const [comments, setComments] = useState([])
    const commentInputRef = useRef()
    useEffect( () => {
        getComments()
    }, [])
    async function getComments() { 
        setComments([])
        const response = await postRequest('posts/viewComments', {postId: props.id})
        console.log('response', response.comments)
        
        response.comments.forEach(comment => {
            {console.log('added')}
            setComments(currentComments => [...currentComments, {
                id:comment.id,
                username: comment.postedBy,
                message: comment.message,
                likes: comment.likes,
            }])
        });
       
        console.log('viuewcomments', comments)
    }

    const commentOnPost = async (e) => {
        console.log('click')
        if(commentInputRef.current.value) {
            const data = {
                content: commentInputRef.current.value,
                postId: props.id,
            }

            
            postRequest('posts/comment', data)
            
            getComments()
            console.log(typeof comments)
          
            commentInputRef.current.value = ''
        }
    }
    if(comments[0]) {
        return (
            <div>
                <div className="comments">
                    {comments.map((comment) => {
                        return <div>
                                <h2>{comment.username}</h2>
                                <p>{comment.message}</p>
                            </div>
                    })}
                </div>
                <input placeholder="add comment" ref={commentInputRef}/>
                <button onClick={commentOnPost}>Send</button>
            </div>
        ) 
    } 
    else {
        return (
            <div>
                <h2>Loading...</h2>
                <input placeholder="add comment" ref={commentInputRef}/>
                <button onClick={commentOnPost}>Send</button>
            </div>
        )
    }
}