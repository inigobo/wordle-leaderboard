const UserCard = (props) => {
    return (
        <div>
            <div>{props.username}</div>
            <div>{props.score}</div>
        </div>
    )
}

export default UserCard;