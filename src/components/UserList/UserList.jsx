import UserCard from "../UserCard/UserCard";
import { useState } from "react";
import MockUsers from '../../assets/data/mock-users.json'
import MockPlays from '../../assets/data/mock-plays.json'
import { styled } from "@stitches/react";
import { UserListLayoutStyles } from "./UserList.styles";
import { getUsers, getPlaysById } from "../../services/apiCalls";

const UserList = ({ playId }) => {

    const [users, setUsers] = getUsers();
    const [play, setPlay] = getPlaysById(playId);

    const filterLeaderboard = play.entries;

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