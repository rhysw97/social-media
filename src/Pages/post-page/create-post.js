import React, { useState, useRef, useEffect } from 'react'
import Post from './post'
import { postRequest, getRequest } from '../../utils/server-queries.ts';
import UserProfile from '../../data/userProfile';
import Logout from '../../components/Login/logout';




export default function CreatePost() {
    const [posts, setPosts] = useState([]);
    const postInputRef = useRef()
    async function newPost(e) {
        
        if(postInputRef.current.value) {
            const data = {post: postInputRef.current.value}
            postRequest('posts', data);

            const serverPosts = await getRequest('posts/recentPosts')
            postInputRef.current.value = ''
            const recentPosts = await getRecentPosts()
        }
    }

    useEffect( () => {  
        getRecentPosts()
  
    },[])

    async function getRecentPosts(){
        const serverPosts = await getRequest('posts/recentPosts')
        
        setPosts([])
        serverPosts.forEach(post => {
            setPosts(currentPosts => [...currentPosts, {id:post._id, username: post.postedBy, content: post.message,likes: post.likes, likedBy: post.likedBy}])
        });
    }

    

    return(
        <div>
            <header>
                <h1 className='text-5xl'>Feed</h1>
            </header>
            <Logout />
            
            <div>
                {posts.map((post, index) => <Post key={post.id} post={post} />)}
            </div>
            <div>
                <input id="postBox" type="text" placeholder="What is on your mind" ref={postInputRef}/>
                <p onClick={newPost}>Post</p>
            </div>
        </div>
    )
}