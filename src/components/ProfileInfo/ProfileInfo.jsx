import Avatar from '../Avatar/Avatar';
import { ProfileInfoStyle, NameStyle, UsernameStyle, StatsStyle, AvatarLayoutStyle, InfoGridStyle, BoardContainerStyle } from "./ProfileInfo.styles";
import { styled } from '@stitches/react';
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from '../../contexts/GlobalContext';
import InfoContainer from "./InfoContainer/InfoContainer";
import MockUsers from '../../assets/data/mock-users.json'
import MockPlays from '../../assets/data/mock-plays.json'
import { useState } from 'react';
import Board from '../Board/Board';

const ProfileInfo = () => {

    const { globalContext, setGlobalContext } = useGlobalContext();

    const [users, setUsers] = useState(MockUsers.users);
    const [plays, setPlays] = useState(MockPlays.plays);

    console.log(users);

    const currentGameId = 344;

    const showUser = users.find((user) => {
        return (
            user.username === globalContext.selectedUser
        );
    });

    const showPlay = plays.find((play) => {
        return (
            play.playId === currentGameId
        );
    }).entries.find((entry) => {
        return (
            entry.username === globalContext.selectedUser
        );
    });


    return (

        <ProfileInfoLayout>
            <InfoGrid>
                <AvatarLayout>
                    <Avatar seed={showUser.avatarSeed} variant={'big'} />
                    <NameContainer>
                        {showUser.fullName}
                    </NameContainer>
                    <UsernameContainer>
                        {globalContext.selectedUser}
                    </UsernameContainer>
                </AvatarLayout>
                <StatsLayout>
                    <InfoContainer type='today' score={showPlay.attempts} />
                    <InfoContainer type='all-time' score={97} />
                    {/* <InfoContainer type='position' score={`#${props.position}`} /> */}
                    <InfoContainer type='position' score={`#1`} />
                    <InfoContainer type='streak' score={34} />
                </StatsLayout>
            </InfoGrid>
            <BoardContainer>
                <Board board={showPlay.board} />
            </BoardContainer>
        </ProfileInfoLayout>
    )
}

export default ProfileInfo;

const ProfileInfoLayout = styled('div', ProfileInfoStyle);
const UsernameContainer = styled('div', UsernameStyle);
const NameContainer = styled('div', NameStyle);
const StatsLayout = styled('div', StatsStyle);
const AvatarLayout = styled('div', AvatarLayoutStyle);
const InfoGrid = styled('div', InfoGridStyle);
const BoardContainer = styled('div', BoardContainerStyle)