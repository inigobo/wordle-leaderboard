import { styled } from '@stitches/react';
import { useEffect } from 'react';
import { useGlobalContext } from '../../contexts/GlobalContext';
import { LoginCardStyles, UsernameContainerStyles } from './LoginCard.styles';
import Avatar from '../Avatar/Avatar';
import { useNavigate } from 'react-router-dom';


const LoginCard = () => {

    let navigate = useNavigate();
    const { globalContext } = useGlobalContext();
    useEffect(() => {
        console.log(globalContext, "nav");
    }, [globalContext]);

    const handleClickCard = (event) => {
        event.preventDefault();
        event.stopPropagation();
        navigate('/profile');
    }

    return (
        <CardLayout variant='bg' onClick={handleClickCard}>
            <Avatar seed={globalContext.avatarSeed} variant='small'></Avatar>
            <UsernameContainer>{globalContext.currentUser}</UsernameContainer>
        </CardLayout>

    );
}

export default LoginCard;

const CardLayout = styled('div', LoginCardStyles);
const UsernameContainer = styled('div', UsernameContainerStyles);