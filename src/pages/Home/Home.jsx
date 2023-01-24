import { styled } from "@stitches/react";
import WelcomeCard from "../../components/WelcomeCard/WelcomeCard";
import WelcomeCarousel from "../../components/WelcomeCarousel/WelcomeCarousel";
import { HomeLayoutStyles } from "./Home.styles";

const Home = () => {

    return (
        <HomeLayout>
            <WelcomeCard />
            <WelcomeCarousel wordleWord={'water'}/>
        </HomeLayout>

    )
}

export default Home;
const HomeLayout = styled('div', HomeLayoutStyles)