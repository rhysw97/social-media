import React from "react";
import { postRequest} from '../../utils/server-queries.ts';
export default function EditPost(props) {

    let postData = {
        content : props.content,
        postId: props.id
    }
    const handleSave = () => {
        postRequest("posts/updatePost", postData)
    }

    const handleTextChange = (event) => {
        postData.content = event.target.value
    }

    return (
        <div>
            <textarea onChange={handleTextChange} >{postData.content}</textarea>
            <p onClick={handleSave}>Save</p>
        </div>
    )
}