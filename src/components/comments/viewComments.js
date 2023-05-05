import Comment from "./comment"
export default function ViewComments(props) {
    console.log('comments', props.comments)

    return (
        <div>
            <Comment id={props.id}/>
            {props.comments.map(comment => {
                <div>
                    <h2>{comment.username}</h2>
                    <div>
                        {comment.content}
                    </div>
                </div>
                
            })}

        </div>
    )
}