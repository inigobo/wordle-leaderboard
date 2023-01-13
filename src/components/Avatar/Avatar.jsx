import { styled } from "@stitches/react";
import { Image } from "react-bootstrap";
import { AvatarStyles } from './Avatar.styles';
import { getSGV } from "../../services/apiAvatars";
import { useState, useEffect } from "react";

const Avatar = (props) => {
return (
    <AvatarContainer size={props.variant}>
        <Image src={getSGV(props.seed)} />
    </AvatarContainer>
);
}

export default Avatar;

const AvatarContainer = styled('div', AvatarStyles);