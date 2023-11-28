import {useEffect, useState, useContext} from "react";
import UserProfile from "../../data/userProfile";
import Likes from "../../components/Likes/likes"
import PostComment from "../../components/comments/postComment";
import Modal from "./../..//components//UI/modal/modal"
import { USERNAME } from "../../data/contexts";
import DeletePost from "../../components/DeletePost/DeletePost";
import EditPost from "../../components/EditPost/EditPost";

export default function Post(props) {
    const [commentsModalActive, setCommentsModalActive] = useState(false);
    const [editModalActive, setEditModalActive] = useState(false);
    const [deleteModalActive, setDeleteModalActive] = useState(false);
    const {usernameContext, setUsernameContext} = useContext(USERNAME)
    const postData = props.post
    console.table(postData)
    let editPostButton = null;
    const username = usernameContext
  
    useEffect(() => {
        console.log('username', username)
        
    }, [])
    if(postData.username === username) {
        editPostButton = 
            <div className="flex  justify-between">
                <p onClick={()=> setEditModalActive(true)}>Edit</p>
                <p onClick={()=> setDeleteModalActive(true)}>Delete</p>
            </div>
    } else {
        editPostButton = null
    }

    return(
        <div className="flex-col bg-red-700" >
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
                <p className="open-modal" onClick={()=> {setCommentsModalActive(true)}}>comments</p>
                <Modal show={commentsModalActive} close={()=> setCommentsModalActive(false)} content={<PostComment id={postData.id}/>} title={"Comments"}/>
                <Modal show={deleteModalActive} close={()=> setDeleteModalActive(false)} content={<DeletePost id={postData.id}/>} title={"Delete"}/> 
                <Modal show={editModalActive} close={()=> setEditModalActive(false)} content={<EditPost id={postData.id} content={postData.content}/>} title={"Edit"}/>  
            </div>
        </div>
    )
}