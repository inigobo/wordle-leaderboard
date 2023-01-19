import { styled } from "@stitches/react";
import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import UserList from "../../components/UserList/UserList";
import { LeaderboardStyles } from "./Leaderboard.styles";

const Leaderboard = () => {
    const [currentPlayId, setCurrentPlayId] = useState(344);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (propSearchTerm) => {
        setSearchTerm(propSearchTerm);
    }

    const handleFilterPlayId = (propPlayId) => {
        setCurrentPlayId(propPlayId);
    }

    return (
        <LeaderboardLayout>
            <h3>Leaderboard</h3>
            <SearchBar onSearch={handleSearch} onFilterPlayId={handleFilterPlayId} />
            <UserList playId={currentPlayId} searchTerm={searchTerm} />
        </LeaderboardLayout>
    )
}

export default Leaderboard;
const LeaderboardLayout = styled('div', LeaderboardStyles);