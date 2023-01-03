export const ProfileInfoStyle = {
    width: '100%',
    display: 'flex',
    justifyContent:'center',
    flexDirection: 'row',
    '@media (max-width: 820px)': {
        maxWidth: '352.5px',
    },
}

export const AvatarLayoutStyle = {
    padding: '1em 0'
}

export const AvatarStyle = {
    width: '100px',
    height: '100px',
    border: 'black solid',
    borderRadius: '1.25rem',
    '@media (max-width: 820px)': {
        width: '40px',
        height: '40px',
    },
}

export const UsernameStyle = {
    fontSize: '1em',
    fontFamily: 'Courier',
    '@media (max-width: 820px)': {
        fontSize: '0.9em',

    },
}

export const NameStyle = {
    fontSize: '1em',
    fontWeight: 'bold',
    '@media (max-width: 820px)': {
        fontSize: '0.75em',

    },
}
export const StatsStyle = {
    display: 'grid',
    gridGap: '0.5em',
    width: '352.5px',
    padding: '0.5em',
    gridTemplateColumns: 'auto auto',
    gridTemplateRows: 'auto',
    '@media (max-width: 820px)': {
        fontSize: '0.75em',

    },

}