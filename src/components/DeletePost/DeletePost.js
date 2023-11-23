import React from "react";

export default function DeletePost(props) {
    const handleConfimDelete = async () => {
        fetch('/post/deletePost', {
            method: 'DELETE',
            body: {
                postId: props.Id
            }
        })
    }

    return(
        <div>
            <p>Are you sure you would like to delete this post</p>
            <div classname="options">
                <p onClick={handleConfimDelete}>Yes</p>
                <p>No</p>
            </div>
        </div>
    )
}