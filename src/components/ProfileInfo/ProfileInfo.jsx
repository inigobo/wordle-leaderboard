import { Card } from "react-bootstrap";
import Avatar from '../Avatar/Avatar';
import Image from 'react-bootstrap/Image';
import { ProfileInfoStyle, InfoContainerStyle } from "./ProfileInfo.styles";
import { styled } from '@stitches/react';
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from '../../contexts/GlobalContext';

import file from '../../assets/images/p1.jpeg';

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

    return (
        <ProfileInfoLayout onClick={handleSelectCard}>
            <Avatar source={file} variant='big'/>
            <InfoContainer>Username: {props.username}</InfoContainer>
            <InfoContainer>Attempts: {props.score}</InfoContainer>
            <InfoContainer>Streak: </InfoContainer>
        </ProfileInfoLayout>
    )
}

export default ProfileInfo;
const ProfileInfoLayout = styled('div', ProfileInfoStyle)
const InfoContainer = styled('div', InfoContainerStyle)
