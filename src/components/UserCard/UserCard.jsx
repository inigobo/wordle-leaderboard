import { Card } from "react-bootstrap";
import { UserCardStyle, AvatarStyle, TitleContainerStyle, StatsContainerStyle } from "./UserCard.styles";
import { styled } from '@stitches/react';
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from '../../contexts/GlobalContext';


const UserCard = (props) => {
    let navigate = useNavigate();
    const { globalContext, setGlobalContext } = useGlobalContext();

    const handleSelectCard = (event) => {     
        event.preventDefault();
        event.stopPropagation();
        console.log(event.target.value);
        setGlobalContext({ ...globalContext,selectedUser: props.username});
        console.log(globalContext, "card");
        navigate('/profile');
    };

    return (
        <CardLayout onClick={handleSelectCard}>
            <Avatar>AVATAr</Avatar>
            <TitleContainer>{props.username}</TitleContainer>
            <StatsContainer>{props.score}</StatsContainer>
        </CardLayout>
    )
}

export default UserCard;
const CardLayout = styled('div', UserCardStyle)
const Avatar = styled('div', AvatarStyle)
const TitleContainer = styled('div', TitleContainerStyle)
const StatsContainer = styled('div', StatsContainerStyle)
