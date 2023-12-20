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
    let posterButtons = null;
    const username = usernameContext
  
    useEffect(() => {
        console.log('username', username)
        
    }, [])
    if(postData.username === username) {
        posterButtons = 
            <div className="flex mb-6 justify-between">
                <p className="button-green" onClick={()=> setEditModalActive(true)}>Edit</p>
                <p className="button-green mr-4" onClick={()=> setDeleteModalActive(true)}>Delete</p>
            </div>
    } else {
        posterButtons = null
    }

    return(
        <div className="flex-col pl-[20px] bg-slate-300 rounded-md shadow-xl shadow-slate-600 gap-6" >
            <div className="flex mt-1">
                <div className="rounded-full h-[50px] w-[50px] mt-2 mb-2 mr-2 ml-1">
                    <img className="w-[50px] h-[50px]  bg-black rounded-full" src={`./uploads/${postData.profilePicture}`}/>
                </div>
                <p className="mx-8 pt-1 text-2xl">{postData.username}</p>
            </div>
            <p className="ml-[30px] text-lg my-2">{postData.content}</p>
            {posterButtons}
            <div className="flex flex-col gap-6">
                <Likes className= "ml-[30px] mr-[50px]"likes ={postData.likes} post={postData}></Likes>
                <p className="open-modal button-green mx-auto mb-2" onClick={()=> {setCommentsModalActive(true)}}>comments</p>
                <Modal show={commentsModalActive} close={()=> setCommentsModalActive(false)} content={<PostComment id={postData.id}/>} title={"Comments"}/>
                <Modal show={deleteModalActive} close={()=> setDeleteModalActive(false)} content={<DeletePost id={postData.id}/>} title={"Delete"}/> 
                <Modal show={editModalActive} close={()=> setEditModalActive(false)} content={<EditPost id={postData.id} content={postData.content}/>} title={"Edit"}/>  
            </div>
        </div>
    )
}