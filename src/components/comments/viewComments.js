export default function ViewComments(props) {
    props.comments

    return (
        <div>
            {props.comments.map(comment => {

                <div>
                    <h2>{comment.username}</h2>
                    <div>
                    </div>
                </div>
                
            })}
        </div>
    )
}