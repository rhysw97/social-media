import React, { useState, useRef, useEffect } from 'react'
import Post from '../post-system/post'
//import { postRequest, getRequest } from '../../utils/server-queries';



export default function CreatePost() {
    const [posts, setPosts] = useState([]);
    const postInputRef = useRef()
    function newPost(e) {
        const post = document.getElementById('postBox');
        if(post.value) {
            setPosts([...posts, <Post content={post.value} key={posts.length} />]);
            post.value = ''
        }
    }

    useEffect(() => {

    })
    return(
        <div>
            {posts}
            <div>
                <input id="postBox" type="text" placeholder="What is on your mind"/>
                <p onClick={newPost}>Post</p>
            </div>
        </div>
    )
}