import { styled } from '@stitches/react';
import { useEffect } from 'react';
import { useGlobalContext } from '../../contexts/GlobalContext';

const LoginCard = () => {
    const { globalContext } = useGlobalContext();
    useEffect(() => {
        console.log(globalContext, "nav");
    }, [globalContext]);

    return (
        <div>
            Signed in as: {globalContext.username}
        </div>
    );
}

export default LoginCard;

const CardLayout = styled(Card, CardLayoutStyles)