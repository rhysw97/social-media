import React from 'react'
import { useState } from 'react';
import Post from './post'


export default function CreatePost() {
    const [posts, setPosts] = useState([]);
    function newPost(e) {
        const post = document.getElementById('postBox');
        if(post.value) {
            setPosts([...posts, <Post content={post.value} key={posts.length} />]);
            post.value = ''
      
        }   
    }
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