import {useState} from "react";
import UserProfile from "../../data/userProfile";
import Likes from "../../components/Likes/likes"




export default function Post(props) {
    const postData = props.post
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
            </div>
        </div>
    )
}