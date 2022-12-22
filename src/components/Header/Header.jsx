import { styled } from "@stitches/react";
import { HeaderStyles } from "./Header.styles";
import HeaderButton from "../Button/Button";
import { useNavigate } from "react-router-dom";


const Header = () => {
    let navigate = useNavigate();
    //const [userContext, setUserContext]

    return (
        <HeaderContainer>
            <HeaderButton onClick={()=>setTimeout(()=>{navigate("/")},500)} text={"Home"} />
            <HeaderButton onClick={()=>setTimeout(()=>{navigate("/leaderboard")},500)}  text={"Leaderboard"} />
            <LoginCard/>
        </HeaderContainer>
    )
}

export default Header;

const HeaderContainer = styled('div', HeaderStyles)