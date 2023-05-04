import { useState } from "react"
import ModalTemplate from "../UI/modal-template"
export default function LikedBy(props) {
    const [open, setOpen] = useState(false)
    const [likedBy, setLikedBy] = useState(props.likedBy)

   const listOfUsers = <div>
        {likedBy.map((user) => {
            return <p>{user}</p>
        })}
    </div>
    return(
        <div>
            <button onClick={() => {
                setOpen(true)
            }}>likedBy</button>
            <ModalTemplate isOpen={open} setIsOpen={setOpen} content={listOfUsers} />
        </div>
    )
}