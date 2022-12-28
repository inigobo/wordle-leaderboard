import { styled } from "@stitches/react";
import UserList from "../../components/UserList/UserList";
import { useGlobalContext } from "../../contexts/GlobalContext";
import { LeaderboardStyles } from "./Leaderboard.styles";

const Leaderboard = () => {
    return (
        <LeaderboardLayout>
            <div>Leaderboard</div>
            <UserList/>
        </LeaderboardLayout>)
}

export default Leaderboard;
const LeaderboardLayout = styled('div', LeaderboardStyles);