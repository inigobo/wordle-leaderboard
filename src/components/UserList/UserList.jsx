import UserCard from "../UserCard/UserCard";
import { useEffect, useState } from "react";
import { styled } from "@stitches/react";
import { UserListLayoutStyles } from "./UserList.styles";
import { getUsers, getPlays, getPlaysById } from "../../services/apiCalls";

const UserList = ({ playId }) => {

    const [users, setUsers] = useState([]);
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        if (users.length === 0) {
            getUsers().then(
                (response) => {
                    setUsers(response.data);
                });
        }
    }, [users]);


    useEffect(() => {
        if (entries.length === 0) {
            getPlaysById(playId)
                .then(
                    (response) => {
                        console.log(response.data);
                        console.log(playEntries);
                        setEntries(playEntries);
                    });
        }
    }, [entries]);

    console.log(entries);

    return (
        <UserListLayout>
            {
                entries.filter((entry) => {
                    return (
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