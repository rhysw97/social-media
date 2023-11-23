import React from "react";
import { postRequest } from "../../utils/server-queries";
export default function EditPost(props) {
    let postContent = props.content
    const handleSave = () => {
        postRequest("posts/updatePost", postContent)
    }

    const handleTextChange = (event) => {
        postContent = event.target.value
    }



    return (
        <div>
            <textarea onChange={handleTextChange} >{postContent}</textarea>
            <p onClick={handleSave}>Save</p>
        </div>
    )
}