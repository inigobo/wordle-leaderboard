import { styled } from "@stitches/react";
import { HeaderStyles } from "./Header.styles";
import HeaderButton from "../Button/Button";
import LoginCard from "../LoginCard/LoginCard";


const Header = () => {
    return (
        <HeaderContainer>
            <HeaderButton redirect={"/"} text={"Home"} />
            <HeaderButton redirect={"/leaderboard"}  text={"Leaderboard"} />
            <HeaderButton redirect={"/login"}  text={"Login"} />
            <LoginCard/>
        </HeaderContainer>
    )
}

export default Header;

const HeaderContainer = styled('div', HeaderStyles)