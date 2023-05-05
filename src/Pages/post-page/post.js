import {useState} from "react";
import UserProfile from "../../data/userProfile";
import Likes from "../../components/Likes/likes"
import Comment from "../../components/comments/comment";
import ViewComments from "../../components/comments/viewComments";
import Modal from "./../..//components//UI/modal/modal"




export default function Post(props) {
    const [modalActive, setModalActive] = useState(false);
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
                <p className="open-modal" onClick={() => {
                     console.log('postData',postData)
                    setModalActive(true)
                   
                }}>comments</p>
                <Modal show={modalActive} close={()=> setModalActive(false)} content={<ViewComments id={postData.id} comments={postData.comments}/>} title={"Comments"}/>
                

                
            </div>
        </div>
    )
}