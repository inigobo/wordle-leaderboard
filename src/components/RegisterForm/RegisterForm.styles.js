export const RegisterFormStyles = {
    width: '44rem',
    padding: '1em'
}

export const AvatarRadioStyles = {
    display: 'flex',
    alignItems: 'strech',

    /* IMAGE STYLES */
    '[type = radio] + img' : {
        cursor: 'pointer',
    },

    /* CHECKED STYLES */
    '[type = radio]: checked + img ' : {
        outline: '2px solid #f00'
    }
}