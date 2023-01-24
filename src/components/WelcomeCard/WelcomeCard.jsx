import { styled } from "@stitches/react";
import { WelcomeCardLayoutStyles } from "./WelcomeCard.styles";


const WelcomeCard = () => {
    
    return (
        <WelcomeCardLayout>
            <h3>Welcome to Wordle Tracker!</h3>
            <p>Here you can track your Wordle scores and games with your friends and family.</p>
            <h5>Have you played today's puzzles?</h5>
            <p><a target="_blank" href="https://lapalabradeldia.com/"> La Palabra del Día</a> in Spanish</p>
            <p><a target="_blank" href="https://www.nytimes.com/games/wordle/index.html">NY Times Wordle</a> in English</p>
        
        </WelcomeCardLayout>

    )
}

export default WelcomeCard;
const WelcomeCardLayout = styled('div', WelcomeCardLayoutStyles);