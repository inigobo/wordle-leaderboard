import UserCard from "../UserCard/UserCard";
import { useEffect, useState } from "react";
import { styled } from "@stitches/react";
import { UserListLayoutStyles } from "./UserList.styles";
import { getUsers, getPlaysById } from "../../services/apiCalls";

const UserList = ({ playId, searchTerm }) => {

    const [users, setUsers] = useState([]);
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        getUsers().then(
            (response) => {
                setUsers(response.data);
            });
    }, [searchTerm]);


    useEffect(() => {
        getPlaysById(playId)
            .then(
                (response) => {
                    setEntries(response.data);
                });
    }, [playId]);



    return (
        <UserListLayout>
            {
                entries.filter((entry) => {
                    return (
                        entry.username.includes(searchTerm)
                    );
                }).filter((entry) => {
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