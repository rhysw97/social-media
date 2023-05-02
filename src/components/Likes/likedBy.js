import { useState } from "react"
export default function likedBy(props) {
    const [open, setOpen] = useState(false)
    const [likedBy, setLikedBy] = useState(props.post.likedBy)
    return(
        <div>
            <button onClick={() => {
                setOpen(true)
            }}>likedBy</button>
        </div>
    )
}