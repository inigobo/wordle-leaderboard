import { styled } from "@stitches/react";
import UserList from "../../components/UserList/UserList";
import { LeaderboardStyles } from "./Leaderboard.styles";

const Leaderboard = () => {
    return (
        <LeaderboardLayout>
            <h3>Leaderboard</h3>
            <SearchBar/>
            <UserList playId={345}/>
        </LeaderboardLayout>)
}

export default Leaderboard;
const LeaderboardLayout = styled('div', LeaderboardStyles);