import { styled } from "@stitches/react";
import { useGlobalContext } from "../../contexts/GlobalContext";
import { ProfileLayoutStyles } from "./ProfileDetail.styles";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";

const ProfileDetail = () => {
    return (
        <ProfileLayout>
            <ProfileInfo/>
        </ProfileLayout>
    )
}

export default ProfileDetail;

const ProfileLayout = styled('div', ProfileLayoutStyles);