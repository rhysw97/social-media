import { useRef } from "react";
import {postRequest} from '../../utils/server-queries.ts'

export default function Comment(props) {
    const commentInputRef = useRef()
    const commentOnPost = (e) => {
        console.log('click')
        if(commentInputRef.current.value) {
            const data = {
                content: commentInputRef.current.value,
                postd: props.id,
            }
            postRequest('posts/comment', data)
            commentInputRef.current.value = ''
        }
        
    }
    return (
        <div>
            <input placeholder="add comment" ref={commentInputRef}/>
            <button onClick={commentOnPost}>Send</button>
        </div>
    )
}