import UserCard from "../UserCard/UserCard";
import { useState } from "react";
import MockPlays from './mock-plays.json'
import MockUsers from './mock-users.json'

const UserList = () => {
    const [players, setPlayers] = useState(MockUsers);
    const [plays, setPlays] = useState(MockPlays.plays);
    console.log(plays);
    return (
        <div>
            {plays.map((play) => {
                return (
                    <div>
                        <p>{play.playId}</p>
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
                        }</div>
                )
            })}
        </div>
    )
}

export default UserList;