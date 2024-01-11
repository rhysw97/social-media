import React, { useState, useRef, useEffect } from 'react'
import Post from './post'
import { postRequest, getRequest } from '../../utils/server-queries.ts';
import UserProfile from '../../data/userProfile';
import Logout from '../../components/Login/logout';
import {useLocation} from 'react-router-dom';

//component to allow user to create a post
export default function CreateEventPost() {
    const [posts, setPosts] = useState([]); //recent posts state
    const postInputRef = useRef() //reference to post input
    const {state} = useLocation()
    const {id, artist} = state

    //function to send new post to backend
    async function newEventPost() {
        if(postInputRef.current.value) {
            const data = {id: id, post: postInputRef.current.value}
            postRequest('posts/createEventPost', data)
            postInputRef.current.value = ''
            getEventPosts()
        }
    }

    //run once when first rendered
    useEffect( () => {  
        getEventPosts()
        
        console.log(id)
    },[])
     //function to get recent posts from server
    async function getEventPosts(){
    
        const serverPosts = await postRequest('posts/eventPosts', {id: id})
        
        setPosts([])
        serverPosts.forEach(post => {
            setPosts(currentPosts => [...currentPosts, {
                id: post._id, 
                username: post.postedBy, 
                content: post.message,
                likes: post.likes, 
                likedBy: post.likedBy, 
                comments: post.comments,
                date: post.date,
                eventId: id
            }])
        });
    }

    return(
        <div className='gothic' >
            <header className='flex justify-center'>
                <h1 className='text-5xl heading'>{artist}</h1>
            </header>
            <div className='ml-16'>
                <Logout />
                
                <div className=" flex flex-col w-3/6  mx-auto gap-6">
                    {posts.map((post, index) => <Post key={post.id} post={post} />)}
                </div>
                <div className ="flex flex-col items-center mt-10 mx-auto fixed bottom-0 w-[100%] bg-green-400">
                    <input className="border-black border-2 w-40 rounded-lg px-2 my-3"id="postBox" type="text" placeholder="What is on your mind" ref={postInputRef}/>
                    <p onClick={newEventPost}>Post</p>
                </div>
            </div>
        </div>
    )
}