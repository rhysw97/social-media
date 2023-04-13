import React, { useState, useRef, useEffect } from 'react'
import Post from '../post-system/post'
import { postRequest, getRequest } from '../../utils/server-queries.ts';
import UserProfile from '../../data/userProfile';
import Logout from '../Login/logout';




export default function CreatePost() {
    const [posts, setPosts] = useState([]);
    const postInputRef = useRef()
    async function newPost(e) {
        
        if(postInputRef.current.value) {
            const data = {post: postInputRef.current.value}
            console.log(data)
            postRequest('posts', data);
           

            const serverPosts = await getRequest('recentPosts')
            console.log(serverPosts.data)
            postInputRef.current.value = ''
            const recentPosts = await getRecentPosts()
        }
    }

    useEffect( () => {  
        getRecentPosts()
    },[])

    async function getRecentPosts(){
        const serverPosts = await getRequest('recentPosts')
        console.log(serverPosts)
        setPosts([])
        serverPosts.forEach(post => {
            setPosts(currentPosts => [...currentPosts, {username: post.postedBy, content: post.message}])
            console.log(post)
            console.log(post.postedBy)
        });
    }

    return(
        <div>
            <Logout />
            <div>
                {//posts.map((post, index) => <Post key={index} content={post.contents} username={post.username} ></Post>)
                }
            </div>
            <div>
                <input id="postBox" type="text" placeholder="What is on your mind" ref={postInputRef}/>
                <p onClick={newPost}>Post</p>
            </div>
        </div>
    )
}