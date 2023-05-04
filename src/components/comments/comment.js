import { useRef } from "react";
import {postRequest} from '../../utils/server-queries.ts'

export default function Comment(props) {
    const commentInputRef = useRef()
    postRequest('post/comment', {id: props.id, content: commentInputRef})
    return (
        <div>
            <input placeholder="add comment" ref={commentInputRef}/>
            <button>Send</button>
        </div>
    )
}