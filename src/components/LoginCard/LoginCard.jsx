import { styled } from '@stitches/react';
import { useEffect } from 'react';
import { useGlobalContext } from '../../contexts/GlobalContext';
import { LoginCardStyles, UsernameContainerStyles } from './LoginCard.styles';
import Avatar from '../Avatar/Avatar';
import file from '../../assets/images/p1.jpeg';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import LoginCardMenu from '../LoginCardMenu/LoginCardMenu';
import { Dropdown } from 'react-bootstrap';


const LoginCard = () => {
    const { globalContext } = useGlobalContext();
    useEffect(() => {
        console.log(globalContext, "nav");
    }, [globalContext]);

    return (
        <Dropdown>
            <CardLayout variant='bg'>
                <Avatar source={file}></Avatar>
                <UsernameContainer>{globalContext.username}</UsernameContainer>
            </CardLayout>
            <LoginCardMenu/>
            
        </Dropdown>
    );
}

export default LoginCard;

const CardLayout = styled(DropdownToggle, LoginCardStyles);
const UsernameContainer = styled('div', UsernameContainerStyles);