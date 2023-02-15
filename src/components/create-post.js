import React from 'react'
import { useState } from 'react';
import Post from './post'


export default function CreatePost() {
    const [posts, setPosts] = useState([]);
    function newPost(e) {
        const post = document.getElementById('postBox').value;
        if(post) {
            let tempPosts = posts;
            tempPosts.push(<Post content={post}/>)
            setPosts(tempPosts);
            console.log(posts)
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