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

    const [user, setUser] = useState();

    useEffect(() => {
        if (!user) {
            getUsers().then(
                (response) => {
                    const user = response.data.find((user) => {
                        return (
                            user.username === globalContext.currentUser
                        );
                    });
                    setUser(user);
                });
        }
    }, [user]);


    const handleClickCard = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setGlobalContext({ ...globalContext, selectedUser: user.username });
        navigate('/profile');
        navigate(0);
    }

    return (
        <CardLayout variant='bg' onClick={handleClickCard}>
            <Avatar seed={user?.avatarSeed} variant='small'></Avatar>
            <UsernameContainer>{user?.username}</UsernameContainer>
        </CardLayout>

    );
}

export default LoginCard;

const CardLayout = styled('div', LoginCardStyles);
const UsernameContainer = styled('div', UsernameContainerStyles);