import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { styled } from "@stitches/react";
import { CarouselCardLayoutStyles, CarouselContainerStyles } from "./WelcomeCarousel.styles";
import { getGifsByWord } from "../../services/apiCalls";

const WelcomeCarousel = ({ wordleWord }) => {
    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        getGifsByWord(wordleWord)
            .then(data => setGifs(data))
            .catch(err => console.log(err));
    }, [wordleWord]);

    return (
        <CarouselCardLayout>
            <h4>Need a hint for today's puzzle?</h4>
            <CarouselContainer interval={5000}>
                {gifs.map((gif, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block mx-auto"
                            src={gif.images.fixed_height.url}
                            alt={gif.title}
                            style={{ width: 400, height: 270, objectFit: 'cover'}}
                        />
                    </Carousel.Item>
                ))}
            </CarouselContainer>
        </CarouselCardLayout>
    );
};

export default WelcomeCarousel;
const CarouselCardLayout = styled('div', CarouselCardLayoutStyles)
const CarouselContainer = styled(Carousel, CarouselContainerStyles)
