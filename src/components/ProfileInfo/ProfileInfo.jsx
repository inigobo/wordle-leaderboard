import Avatar from '../Avatar/Avatar';
import { ProfileInfoStyle, NameStyle, UsernameStyle, StatsStyle, AvatarLayoutStyle, InfoGridStyle, BoardContainerStyle } from "./ProfileInfo.styles";
import { styled } from '@stitches/react';
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from '../../contexts/GlobalContext';
import InfoContainer from "./InfoContainer/InfoContainer";
import MockProfile from '../../assets/data/mock-profile.json'
import { useState } from 'react';
import Board from '../Board/Board';

const ProfileInfo = (props) => {
    let navigate = useNavigate();
    const { globalContext, setGlobalContext } = useGlobalContext();

    const handleSelectCard = (event) => {
        event.preventDefault();
        event.stopPropagation();
        console.log(event.target.value);
        setGlobalContext({ ...globalContext, selectedUser: props.username });
        console.log(globalContext, "card");
        navigate('/profile');
    };

    const [profile, setProfile] = useState(MockProfile);
    console.log(profile);


    return (

        <ProfileInfoLayout onClick={handleSelectCard}>
            <InfoGrid>
                <AvatarLayout>
                    <Avatar seed={globalContext.avatarSeed} variant={'big'} />
                    <NameContainer>
                        {profile.fullName}
                    </NameContainer>
                    <UsernameContainer>
                        {profile.selectedUser}
                    </UsernameContainer>
                </AvatarLayout>
                <StatsLayout>
                    <InfoContainer type='today' score={12} />
                    <InfoContainer type='all-time' score={97} />
                    {/* <InfoContainer type='position' score={`#${props.position}`} /> */}
                    <InfoContainer type='position' score={`#1`} />
                    <InfoContainer type='streak' score={34} />
                </StatsLayout>
            </InfoGrid>
            <BoardContainer>
                <Board board={profile.play.board} />
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