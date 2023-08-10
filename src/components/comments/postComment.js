import { useEffect, useRef, useState } from "react";
import {getRequest, postRequest} from '../../utils/server-queries.ts'


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
            setComments(currentComments => [...currentComments, comment])
        });
        
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

   
    if(comments) {
        return (
            <div className="h-full">
                <div className="comments h-96 overflow-scroll">
                    {comments.map((comment, index) => {
                        return <div className="" key={index}>
                           <div className="">
                                <img className="w-20 h-20" src={`./uploads/${comment.profilePicture}`}/>
                                <h2>{comment.user}</h2>
                           </div>
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