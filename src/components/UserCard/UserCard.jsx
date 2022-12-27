import { Card } from "react-bootstrap";
import { UserCardStyle, AvatarStyle, TitleContainerStyle, StatsContainerStyle } from "./UserCard.styles";
import { styled } from '@stitches/react';


const UserCard = (props) => {
    return (
        <CardLayout>
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
