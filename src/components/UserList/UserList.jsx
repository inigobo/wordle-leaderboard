import UserCard from "../UserCard/UserCard";
import { useState } from "react";
import MockLeaderboard from '../../assets/data/mock-leaderboard.json'
import { styled } from "@stitches/react";
import { UserListLayoutStyles } from "./UserList.styles";
import { useGlobalContext } from "../../contexts/GlobalContext";

const UserList = () => {
    const [leaderboard, setLeaderboard] = useState(MockLeaderboard.leaderboard);
    const {globalContext, setGlobalContext} = useGlobalContext();

    const filterLeaderboard = leaderboard;

    return (
        <UserListLayout>
            {
                filterLeaderboard.sort((user1, user2)=>{
                    return (user1.play.attempts - user2.play.attempts)
                }

                ).map((user) => {
                    return (
                        <UserCard
                            key={user.username}
                            username={user.username}
                            score={user.play.attempts}
                            avatarSeed={user.avatarSeed}
                        />
                    )
                })
            }
        </UserListLayout>
    )
}

export default UserList;

const UserListLayout = styled('div', UserListLayoutStyles)