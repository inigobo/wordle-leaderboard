import Avatar from '../Avatar/Avatar';
import { ProfileInfoStyle, NameStyle, UsernameStyle, StatsStyle, AvatarLayoutStyle } from "./ProfileInfo.styles";
import { styled } from '@stitches/react';
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from '../../contexts/GlobalContext';
import InfoContainer from "./InfoContainer/InfoContainer";
import { useWindowDimensions } from '../../hooks/useWindowDimensions';


const ProfileInfo = (props) => {
    let navigate = useNavigate();
    const { globalContext, setGlobalContext } = useGlobalContext();
    const {isDesktop} = useWindowDimensions();
    console.log(isDesktop);

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
            <AvatarLayout>
                <Avatar seed={globalContext.selectedUser} variant={'big'} />
                <NameContainer>
                    Iñigo Berganza{globalContext.username}
                </NameContainer>
                <UsernameContainer>
                    {globalContext.selectedUser}
                </UsernameContainer>
            </AvatarLayout>
            <StatsLayout>
                <InfoContainer type='today' score={12} />
                <InfoContainer type='all-time' score={97} />
                {/* <InfoContainer type='position' score={`#${props.position}`} /> */}
                <InfoContainer type='position' score={`#1`} />
                <InfoContainer type='streak' score={34} />
            </StatsLayout>
            
        </ProfileInfoLayout>
    )
}

export default ProfileInfo;

const ProfileInfoLayout = styled('div', ProfileInfoStyle);
const UsernameContainer = styled('div', UsernameStyle);
const NameContainer = styled('div', NameStyle);
const StatsLayout = styled('div', StatsStyle);
const AvatarLayout = styled('div', AvatarLayoutStyle);