import {useState} from "react";
import UserProfile from "../../data/userProfile";
import Likes from "../../components/Likes/likes"
import Comment from "../../components/comments/comment";




export default function Post(props) {
    
    const postData = props.post
    console.table(postData)

    return(
        <div className="flex-col">
            <div className="flex">
                <div className="border bg-black w-10 h-10">
                    <img />
                </div>
                <p className="">{postData.username}</p>
            </div>
            <p className="">{postData.content}</p>
            <div className="">
                <Likes likes ={postData.likes} post={postData}></Likes>
                <Comment id={postData.id}/>
            </div>
        </div>
    )
}