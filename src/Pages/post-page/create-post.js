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
            console.log(data)
            postRequest('posts', data);
           

            const serverPosts = await getRequest('posts/recentPosts')
            console.log(serverPosts.data)
            postInputRef.current.value = ''
            const recentPosts = await getRecentPosts()
        }
    }

    useEffect( () => {  
        getRecentPosts()
    },[])

    async function getRecentPosts(){
        const serverPosts = await getRequest('posts/recentPosts')
        console.log(serverPosts)
        setPosts([])
        serverPosts.forEach(post => {
            setPosts(currentPosts => [...currentPosts, {username: post.postedBy, content: post.message,likes: post.likes}])
        });
    }

    

    return(
        <div>
            <header>
                <h1 className='text-2xl'>Feed</h1>
            </header>
            <Logout />
            
            <div>
                {posts.map((post, index) => <Post key={post._id} content={post.content} username={post.username} likes={post.likes} />)}
            </div>
            <div>
                <input id="postBox" type="text" placeholder="What is on your mind" ref={postInputRef}/>
                <p onClick={newPost}>Post</p>
            </div>
        </div>
    )
}