import { useEffect, useRef, useState } from "react";
import {getRequest, postRequest} from '../../utils/server-queries.ts'

//component to allow user to post a comment
export default function PostComment(props) {
    const [comments, setComments] = useState([])
    const commentInputRef = useRef()
    //runs once on render
    useEffect( () => {
        getComments() //calls get comments
    
    }, [])

    //function to deal with comments returned from server
    async function getComments() { 
        setComments([]) //sets comments state back to empty array to avoid duplicates
        //requests 
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
            <div className="h-screen">
                <div className="comments h-4/5 overflow-scroll">
                    {comments.map((comment, index) => {
                        return <div className="" key={index}>
                           <div className="flex items-center">
                                <img className="w-20 h-20" />
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