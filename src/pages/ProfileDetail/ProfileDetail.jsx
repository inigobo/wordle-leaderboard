import { styled } from "@stitches/react";
import { useGlobalContext } from "../../contexts/GlobalContext";
import { ProfileLayoutStyles } from "./ProfileDetail.styles";

const ProfileDetail = () => {
    const { globalContext } = useGlobalContext();

    return (
        <ProfileLayout>
            <div>{globalContext.selectedUser}'s profile</div>


        </ProfileLayout>
    )
}

export default ProfileDetail;

const ProfileLayout = styled('div', ProfileLayoutStyles);