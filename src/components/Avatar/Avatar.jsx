import { styled } from "@stitches/react";
import { Image } from "react-bootstrap";
import {AvatarStyles} from './Avatar.styles';

const Avatar = (props) => {

    return (
        <AvatarContainer size={props.variant}>
            <Image src={props.source} fluid/>
        </AvatarContainer>
    );
}

export default Avatar;

const AvatarContainer = styled('div', AvatarStyles);