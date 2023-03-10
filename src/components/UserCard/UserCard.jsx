import Avatar from '../Avatar/Avatar';
import { UserCardStyle, TitleContainerStyle, StatsContainerStyle } from "./UserCard.styles";
import { styled } from '@stitches/react';
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from '../../contexts/GlobalContext';
import { useEffect } from 'react';

const UserCard = ({ avatarSeed, status, username, score, position }) => {
    let navigate = useNavigate();
    const { globalContext, setGlobalContext } = useGlobalContext();

    const handleSelectCard = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setGlobalContext({ ...globalContext, selectedUser: username });
        setTimeout(() => {
            navigate('/profile');
        }, 200);
    };


    return (
        <CardLayout onClick={handleSelectCard}>
            <Avatar seed={avatarSeed} variant='medium' />
            <TitleContainer>{username}</TitleContainer>
            {
                status === 'pending' && <StatsContainer>PENDING</StatsContainer>
            }
            {
                !(status === 'pending') && <StatsContainer>{score}</StatsContainer>
            }

        </CardLayout>
    )
}

export default UserCard;
const CardLayout = styled('div', UserCardStyle)
const TitleContainer = styled('div', TitleContainerStyle)
const StatsContainer = styled('div', StatsContainerStyle)
