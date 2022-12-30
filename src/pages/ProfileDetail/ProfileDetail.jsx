import { styled } from "@stitches/react";
import { useGlobalContext } from "../../contexts/GlobalContext";
import { ProfileLayoutStyles } from "./ProfileDetail.styles";
import  Board  from '../../components/Board/Board.jsx';
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";

const ProfileDetail = () => {
    const { globalContext } = useGlobalContext();

    return (
        <ProfileLayout>
            <div>{globalContext.selectedUser}'s profile</div>
            <ProfileInfo/>
            <Board></Board>
        </ProfileLayout>
    )
}

export default ProfileDetail;

const ProfileLayout = styled('div', ProfileLayoutStyles);