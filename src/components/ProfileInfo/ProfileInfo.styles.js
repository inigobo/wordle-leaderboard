export const ProfileInfoStyle = {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    gridTemplateRows: '100px 100px 100px',
    width: '100%'
}

export const AvatarStyle = {
    border: 'black solid',
    borderRadius: '1.25rem',
    '@media (max-width: 820px)': {
        width: '3em',
        height: '3em',
    },
}

export const InfoContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    border: 'black solid',
    borderRadius: '0.75rem',
    fontSize: '1em',
    flexFlow: 'row',
    justifyContent: 'left',
    justifyItems: 'center',
    '@media (max-width: 820px)': {
        fontSize: '1.5em',
    },
}

export const StatsContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    border: 'black solid',
    borderRadius: '0.75rem',
    fontSize: '1em',
    justifyContent: 'center',
    justifyItems: 'center',
    '@media (max-width: 820px)': {
        fontSize: '1.5em',
    },

}