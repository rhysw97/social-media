import {useState} from "react";

export default function Post(props) {
    
    const [likes, setLikes] = useState(0)
    return(
        <div>
            <p>{props.content}</p>
            <div>
                <p onClick={() => {
                    console.log('click')
                    console.log(likes)
                    setLikes(currentLikes => currentLikes + 1)
                }}>Like</p>
                <p>{likes}</p>
            </div>
        </div>
    )
}