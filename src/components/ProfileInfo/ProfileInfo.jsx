import Avatar from '../Avatar/Avatar';
import { ProfileInfoStyle, NameStyle, UsernameStyle, InfoGridStyle, BoardContainerStyle } from "./ProfileInfo.styles";
import { styled } from '@stitches/react';
import { useGlobalContext } from '../../contexts/GlobalContext';
import InfoContainer from "./InfoContainer/InfoContainer";
import { useEffect, useLayoutEffect, useState } from 'react';
import Board from '../Board/Board';
import { getPlays, getPlaysById, getUser, getUsers } from '../../services/apiCalls';
import ModifyProfileModal from '../ModifyProfile/ModifyProfileModal';

const ProfileInfo = ({ currentPlayId, selectedUser, loggedUser }) => {

    const [currentUser, setCurrentUser] = useState(null);
    const [currentPlay, setCurrentPlay] = useState(null);
    const [isUserLoading, setIsUserLoading] = useState(true);
    const [isPlayLoading, setIsPlayLoading] = useState(true);
    const [isSelf, setIsSelf] = useState(false);


    //load user
    useEffect(() => {
        setIsUserLoading(true);
        setIsSelf(false);
        getUser(selectedUser)
            .then((response) => {
                setCurrentUser(response)
                setIsUserLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setIsUserLoading(false);
            });
    }, [selectedUser]);

    //load play
    useEffect(() => {
        setIsPlayLoading(true);
        setIsSelf(false);
        if (!currentPlay) {
            getPlaysById(currentPlayId)
                .then((response) => {
                    setCurrentPlay(response.data.find(play => play.username === selectedUser))
                    setIsPlayLoading(false);
                })
                .catch((error) => {
                    console.error(error);
                    setIsPlayLoading(false);
                });
        };
    }, [selectedUser, currentPlayId]);

    useEffect(() => {
        if (currentUser && currentUser.username === loggedUser) {
            setIsSelf(true);
        }
    }, [currentUser]);

    return (
        <>
            {isUserLoading || isPlayLoading ? <div> Loading ... </div> :
                <ProfileInfoLayout>
                    <InfoGrid>
                        <Avatar seed={currentUser?.avatarSeed} variant={'big'} />
                        <NameContainer>
                            {currentUser?.fullName}
                        </NameContainer>
                        <UsernameContainer>
                            {currentUser?.username}
                        </UsernameContainer>
                        <InfoContainer type='attempts' score={currentPlay ? currentPlay.attempts : 'X'} />
                        <InfoContainer type='streak' score={34} />
                        {isSelf ? <ModifyProfileModal currentUser={currentUser} /> : <></>}
                    </InfoGrid>
                    {
                        currentPlay ?
                            <BoardContainer>
                                <h4>Game #{currentPlay.playId}</h4>
                                <Board board={currentPlay?.board} />
                            </BoardContainer>
                            :
                            <h4>Pending play...</h4>
                    }
                </ProfileInfoLayout>
            }
        </>
    )
}

export default ProfileInfo;

const ProfileInfoLayout = styled('div', ProfileInfoStyle);
const UsernameContainer = styled('div', UsernameStyle);
const NameContainer = styled('div', NameStyle);
const InfoGrid = styled('div', InfoGridStyle);
const BoardContainer = styled('div', BoardContainerStyle)