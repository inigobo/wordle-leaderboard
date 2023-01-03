import Avatar from '../Avatar/Avatar';
import { UserCardStyle, TitleContainerStyle, StatsContainerStyle } from "./UserCard.styles";
import { styled } from '@stitches/react';
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from '../../contexts/GlobalContext';

import file from '../../assets/images/p1.jpeg';

const UserCard = (props) => {
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

    return (
        <CardLayout onClick={handleSelectCard}>
            <Avatar seed={props.username} variant='medium' />
            <TitleContainer>{props.username}</TitleContainer>
            <StatsContainer>{props.score}</StatsContainer>
        </CardLayout>
    )
}

export default UserCard;
const CardLayout = styled('div', UserCardStyle)
const TitleContainer = styled('div', TitleContainerStyle)
const StatsContainer = styled('div', StatsContainerStyle)
