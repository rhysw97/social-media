import {useEffect, useState} from "react";
import UserProfile from "../../data/userProfile";
import Likes from "../../components/Likes/likes"
import PostComment from "../../components/comments/postComment";
import Modal from "./../..//components//UI/modal/modal"
import { USERNAME } from "../../data/contexts";




export default function Post(props) {
    const [modalActive, setModalActive] = useState(false);
    const [username, setUsername] = useState(USERNAME)
    const postData = props.post
    console.table(postData)
    let editPostButton;

    useEffect(() => {
        console.log(username)
        if(postData.username === username) {
            editPostButton = <p>edit</p>
        } else {
            editPostButton = null
        }
    }, [])

    return(
        <div className="flex-col">
            <div className="flex">
                <div className="border bg-black w-10 h-10">
                    <img className="w-20 h-20" src={`./uploads/${postData.profilePicture}`}/>
                </div>
                <p className="">{postData.username}</p>
            </div>
            <p className="">{postData.content}</p>
            {editPostButton}
            <div className="">
                <Likes likes ={postData.likes} post={postData}></Likes>
                <p className="open-modal" onClick={() => {
                    console.log('postData',postData)
                    setModalActive(true)
                   
                }}>comments</p>

                <Modal show={modalActive} close={()=> setModalActive(false)} content={<PostComment id={postData.id}/>} title={"Comments"}/>
                

                
            </div>
        </div>
    )
}