import { styled } from '@stitches/react';
import { useEffect, useState } from 'react';
import { useGlobalContext } from '../../contexts/GlobalContext';
import { LoginCardStyles, UsernameContainerStyles } from './LoginCard.styles';
import Avatar from '../Avatar/Avatar';
import { useNavigate } from 'react-router-dom';
import { getUsers } from '../../services/apiCalls';

const LoginCard = () => {

    let navigate = useNavigate();
    const { globalContext, setGlobalContext } = useGlobalContext();
    useEffect(() => {
        console.log(globalContext, "nav");
    }, [globalContext]);

    const users = getUsers();
    console.log(users);

    const showUser = users.find((user) => {
        return (
            user.username === globalContext.currentUser
        );
    });

    const handleClickCard = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setGlobalContext({ ...globalContext, selectedUser: showUser.username });
        navigate('/profile');
    }

    return (
        <CardLayout variant='bg' onClick={handleClickCard}>
            <Avatar seed={showUser.avatarSeed} variant='small'></Avatar>
            <UsernameContainer>{globalContext.currentUser}</UsernameContainer>
        </CardLayout>

    );
}

export default LoginCard;

const CardLayout = styled('div', LoginCardStyles);
const UsernameContainer = styled('div', UsernameContainerStyles);