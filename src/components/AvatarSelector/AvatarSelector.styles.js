
export const AvatarSelectorStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    border: '1px solid #ced4da',
    borderRadius: '0.375rem',
    padding: '1rem 0.75rem'

}

export const AvatarOptionStyles = {
    display: 'flex',
    justifyContent: 'center',
    border: '1px solid lightgrey',
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