import {useState} from "react";

export default function Post(props) {
    
    const [likes, setLikes] = useState(0)
    return(
        <div>
            <p>{props.content}</p>
            <div>
                <p onClick={() => {
                    setLikes(currentLikes => currentLikes++)
                }}>Like</p>
                <p>{likes}</p>
            </div>
        </div>
    )
}