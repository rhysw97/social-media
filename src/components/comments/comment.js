import { useEffect, useRef, useState } from "react";
import {getRequest, postRequest} from '../../utils/server-queries.ts'


export default function Comment(props) {
    const [comments, setComments] = useState([])
    const commentInputRef = useRef()
    async function getComments() {  
        const response = await postRequest('posts/viewComments', {postId: props.id})
        console.log(response)
      
        setComments(response)
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
          
            commentInputRef.current.value = ''
        }
    }
    return (
        <div>
            {comments.map(comment => {
                <div>
                    <h2>{comment.username}</h2>
                    <div>
                        {comment.content}
                    </div>
                </div>
            })}
            <input placeholder="add comment" ref={commentInputRef}/>
            <button onClick={commentOnPost}>Send</button>
        </div>
    )
}