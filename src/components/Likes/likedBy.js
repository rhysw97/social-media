import { useState } from "react"
import Modal from "../UI/modal/modal"
export default function LikedBy(props) {
    const [modalActive, setModalActive] = useState(false);
    const [likedBy, setLikedBy] = useState(props.likedBy)

   const listOfUsers = <div>
        {likedBy.map((user) => {
            return <p>{user}</p>
        })}
    </div>
    return(
        <div>
            <p className="open-modal" onClick={() => setModalActive(true)}>LikedBy</p>
            <Modal show={modalActive} close={()=> setModalActive(false)} content={listOfUsers}/>
        </div>
    )
}