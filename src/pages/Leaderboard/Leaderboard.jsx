import UserList from "../../components/UserList/UserList";
import { useGlobalContext } from "../../contexts/GlobalContext";

const Leaderboard = () => {
    const { globalContext} = useGlobalContext()
    console.log(globalContext,'>>>>')
    return (
        <>
            <div>Leaderboard</div>
            <UserList/>
        </>)
}

export default Leaderboard;