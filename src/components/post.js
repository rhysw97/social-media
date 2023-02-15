import {useState} from "react";

export default function Post(props) {
    
    const [likes, updateLikes] = useState(0)
    return(
        <div>
            <p>{props.content}</p>
            <div>
                <p onClick={() => {
                    updateLikes(likes++)
                }}>Like</p>
                <p>{likes}</p>
            </div>
        </div>
    )
}