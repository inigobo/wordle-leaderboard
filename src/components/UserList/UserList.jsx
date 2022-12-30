import UserCard from "../UserCard/UserCard";
import { useState } from "react";
import MockPlays from '../../assets/data/mock-plays.json'
import MockUsers from '../../assets/data/mock-users.json'
import { styled } from "@stitches/react";
import { UserListLayoutStyles, AvatarStyle, TitleContainerStyle, StatsContainerStyle } from "./UserList.styles";

const UserList = () => {
    const [players, setPlayers] = useState(MockUsers);
    const [plays, setPlays] = useState(MockPlays.plays);
    console.log(plays);
    const play = plays[0];
    
    return (
        <UserListLayout>
            {
                play.entries.map((entry) => {
                    return (
                        <UserCard
                            key={entry.userId}
                            username={entry.userId}
                            score={entry.score.tries}
                        />
                    )
                })
            }
        </UserListLayout>
    )
}

export default UserList;

const UserListLayout = styled('div', UserListLayoutStyles)