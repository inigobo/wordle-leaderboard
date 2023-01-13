import UserCard from "../UserCard/UserCard";
import { useState } from "react";
import MockLeaderboard from '../../assets/data/mock-leaderboard.json'
import MockUsers from '../../assets/data/mock-users.json'
import MockPlays from '../../assets/data/mock-plays.json'
import { styled } from "@stitches/react";
import { UserListLayoutStyles } from "./UserList.styles";
import { useGlobalContext } from "../../contexts/GlobalContext";

const UserList = ({ playId }) => {

    const [users, setUsers] = useState(MockUsers.users);
    const [plays, setPlays] = useState(MockPlays.plays);

    const currentPlay = plays.find((play) => {
        return (
            play.playId === playId
        );
    });

    const filterLeaderboard = currentPlay.entries;

    return (
        <UserListLayout>
            {
                filterLeaderboard.filter((entry) => {
                    return(
                        entry.status !== 'pending'
                    );
                }).sort((entry1, entry2) => {
                    return (entry1.attempts - entry2.attempts)
                }).map((entry) => {
                    let user = users.find((user) => {
                        return (
                            user.username === entry.username
                        );
                    });
                    return (
                        <UserCard
                            key={entry.username}
                            username={entry.username}
                            score={entry.attempts}
                            avatarSeed={user.avatarSeed}
                            status={entry.status}
                        />
                    );
                })
            }
        </UserListLayout>
    )
}

export default UserList;

const UserListLayout = styled('div', UserListLayoutStyles)