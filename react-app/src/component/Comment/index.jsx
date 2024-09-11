import Avatar from "./Avatar";
import CommentDate from "./CommentDate";
import CommentText from "./CommentText";
import CommentUserInfo from "./CommentUserInfo"

function Comment(props) {
	return (
		<div className="Comment">
			<div className="UserInfo">
				{/* <img className="Avatar" src={props.author.avatarUrl} alt={props.author.name} /> */}
				<Avatar user={props.author} />
                <CommentUserInfo user={props.author} />
				
			</div>
            
            <CommentText text={props.text}/>
            <CommentDate date ={props.date} />

		
		</div>
	);
}

export default Comment;