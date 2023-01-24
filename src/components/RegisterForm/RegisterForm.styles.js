export const RegisterFormStyles = {
    width: '44rem',
    padding: '1em',
}

export const AvatarRadioStyles = {
    display: 'flex',
    alignItems: 'strech',

    /* IMAGE STYLES */
    '[type = radio] + img': {
        cursor: 'pointer',
    },

    /* CHECKED STYLES */
    '[type = radio]: checked + img ': {
        outline: '2px solid #f00'
    }
}


export const AvatarSelectorStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    border: '1px solid #ced4da',
    borderRadius: '0.375rem',
    padding: '1rem 0.75rem',
    margin: '1em 0 1em'

}

export const AvatarOptionStyles = {
    display: 'flex',
    justifyContent: 'center',
    border: '1px solid lightgrey',
    padding: '0 1.44em 0 0',
    /* HIDE RADIO */
    '[type = radio]': {
        display: 'none',
        position: 'relative',
        float: 'none',
        opacity: 0,
        width: 0,
        height: 0,
        left: '40px',
    },

    '&.selected': {
        background: 'lightgrey'
    },

    '&.form-check': {
        padding: 0,
    }
}

export const AvatarTitleLayoutStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'

}