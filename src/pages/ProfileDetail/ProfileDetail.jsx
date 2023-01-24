import { styled } from "@stitches/react";
import { useGlobalContext } from "../../contexts/GlobalContext";
import { ProfileLayoutStyles } from "./ProfileDetail.styles";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ProfileDetail = () => {
    const { globalContext } = useGlobalContext();
    let navigate = useNavigate();

    useEffect(() => {
      if (!globalContext.selectedUser) {
          navigate('/');
      }
    }, [])

    return (
        <ProfileLayout>
            <ProfileInfo selectedUser={globalContext.selectedUser} currentPlayId={globalContext.currentPlayId} loggedUser={globalContext.currentUser} />
        </ProfileLayout>
    )
}

export default ProfileDetail;

const ProfileLayout = styled('div', ProfileLayoutStyles);