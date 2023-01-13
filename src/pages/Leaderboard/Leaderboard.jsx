import { styled } from "@stitches/react";
import UserList from "../../components/UserList/UserList";
import { LeaderboardStyles } from "./Leaderboard.styles";

const Leaderboard = () => {
    return (
        <LeaderboardLayout>
            <h3>Leaderboard</h3>
            <UserList playId={344}/>
        </LeaderboardLayout>)
}

export default Leaderboard;
const LeaderboardLayout = styled('div', LeaderboardStyles);