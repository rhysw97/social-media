import {useState} from "react";
import UserProfile from "../../data/userProfile";
import Likes from "../../components/Likes/likes"
import Comment from "../../components/comments/comment";




export default function Post(props) {
    
    const postData = props.post
    console.table(postData)

    return(
        <div className="flex-col">
            <div>
                <p className="">{postData.username}</p>
                <div className="border-r-8">
                    <img />
                </div>
            </div>
            <p className="">{postData.content}</p>
            <div className="">
                <Likes likes ={postData.likes} post={postData}></Likes>
                <Comment id={postData.id}/>
            </div>
        </div>
    )
}