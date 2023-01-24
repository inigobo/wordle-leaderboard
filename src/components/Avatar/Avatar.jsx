import { styled } from "@stitches/react";
import { Image } from "react-bootstrap";
import { AvatarStyles } from './Avatar.styles';
import { getSGV } from "../../services/apiCalls";

const Avatar = ({ variant, seed }) => {
    return (
        <AvatarContainer size={variant}>
            <Image src={getSGV(seed)} />
        </AvatarContainer>
    );
}

export default Avatar;

const AvatarContainer = styled('div', AvatarStyles);