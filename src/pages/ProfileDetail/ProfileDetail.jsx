import { useGlobalContext } from "../../contexts/GlobalContext";

const ProfileDetail = () => {
    const { globalContext } = useGlobalContext();

    return (
        <div>
            <h1>Profile</h1>
            <h2>Username: {globalContext.username}</h2>
        </div>
    )
}

export default ProfileDetail;