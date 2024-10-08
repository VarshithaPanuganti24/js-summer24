import   Avatar from "./Avatar";

function formatDate(date){
    return date.toLocaleTimeStrinng();
}
function Comment(props){
    return (
        <div className="Comment">
            <div className="UserInfo">
                <Avatar user={props.author} />
                <div className="UserInfo-name">{props.author.name}</div>
            </div>

            <div className="Commennt text">{props.text}</div>

            <div className="Comment-date">{formatDate(props.date)}</div>
        </div>
    )
    
}