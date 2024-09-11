function Avatar(props){
    const {user} =props;
    return <img className="Avatar" src={UserActivation.avatarUrl} alt={UserActivation.name}/>

}
export default Avatar;