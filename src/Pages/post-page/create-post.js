import React, { useState, useRef, useEffect } from 'react'
import Post from './post'
import { postRequest, getRequest } from '../../utils/server-queries.ts';
import UserProfile from '../../data/userProfile';
import Logout from '../../components/Login/logout';

//component to allow user to create a post
export default function CreatePost() {
    const [posts, setPosts] = useState([]); //recent posts state
    const postInputRef = useRef() //reference to post input

    //function to send new post to backend
    async function newPost(e) {
        if(postInputRef.current.value) {
            const data = {post: postInputRef.current.value}
            postRequest('posts', data)
            postInputRef.current.value = ''
            getRecentPosts()
        }
    }

    //run once when first rendered
    useEffect( () => {  
        getRecentPosts()
  
    },[])
     //function to get recent posts from server
    async function getRecentPosts(){
        const serverPosts = await getRequest('posts/recentPosts', localStorage.getItem('access_token'))
        
        setPosts([])
        serverPosts.forEach(post => {
            setPosts(currentPosts => [...currentPosts, {
                id:post._id, 
                username: post.postedBy, 
                content: post.message,
                likes: post.likes, 
                likedBy: post.likedBy, 
                comments: post.comments,
                date: post.date
            }])
        });
    }

    return(
        <div className='gothic' >
            <header className='flex justify-center'>
                <h1 className='text-5xl heading'>Feed</h1>
            </header>
            <div className='ml-16'>
                <Logout />
                
                <div className=" flex flex-col w-3/6  mx-auto gap-6">
                    {posts.map((post, index) => <Post key={post.id} post={post} />)}
                </div>
                <div className ="flex flex-col items-center mt-10 mx-auto fixed bottom-0 w-[100%] bg-green-400">
                    <input className="border-black border-2 w-40 rounded-lg px-2 my-3"id="postBox" type="text" placeholder="What is on your mind" ref={postInputRef}/>
                    <p onClick={newPost}>Post</p>
                </div>
            </div>
        </div>
    )
}