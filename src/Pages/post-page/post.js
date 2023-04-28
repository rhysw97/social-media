import {useState} from "react";
import UserProfile from "../../data/userProfile";
import Likes from "../../components/Likes/likes"




export default function Post(props) {
    
    return(
        <div className="flex-col">
            <div>
                <p className="">{props.username}</p>
                <div className="border-r-8">
                    <img />
                </div>
            </div>
            <p className="">{props.content}</p>
            <div className="">
                <Likes likes ={props.likes} postId={props.postId}></Likes>
            </div>
        </div>
    )
}