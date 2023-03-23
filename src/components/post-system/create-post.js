import React, { useState, useRef, useEffect } from 'react'
import Post from '../post-system/post'
import { postRequest, getRequest } from '../../utils/server-queries.ts';
import UserProfile from '../../data/userProfile';



export default function CreatePost() {
    const [posts, setPosts] = useState([]);
    const postInputRef = useRef()
   async function newPost(e) {
        console.log(postInputRef.current.value)
        if(postInputRef.current.value) {

            postRequest('/posts', {post: postInputRef.current.value })
            setPosts([...posts, <Post content={postInputRef.current.value} key={posts.length} />]);
            postInputRef.value = ''

            const serverPosts = await getRequest('/recentPosts')
            console.log(serverPosts.data.data)
        }
    }

    useEffect( () => {
        
       const serverPosts = getRequest('/recentPosts')
      // console.log(serverPosts)
       //setPosts([serverPosts])
    })

    return(
        <div>
            {posts}
            <div>
                <input id="postBox" type="text" placeholder="What is on your mind" ref={postInputRef}/>
                <p onClick={newPost}>Post</p>
            </div>
        </div>
    )
}