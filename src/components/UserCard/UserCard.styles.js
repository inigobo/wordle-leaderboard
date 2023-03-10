export const UserCardStyle = {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    alignContent: 'stretch',
    alignItems: 'center',
    margin:'0 1em',
    border: '1px solid lightgrey',
    padding: '0.5em',
    borderRadius: '1.25rem',
    boxShadow: 'none !important',
    '&:hover': {
        backgroundColor: 'lightgray',
    },
    cursor: 'pointer',
}
export const AvatarStyle = {
    width: '4em',
    height: '4em',
    border: 'black solid',
    borderRadius: '1.25rem',
    '@media (max-width: 820px)': {
        width: '3em',
        height: '3em',
    },
}

export const TitleContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    fontSize: '2em',
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
    fontSize: '2.5em',
    margin:'0 2em 0 0',
    justifyContent: 'center',
    justifyItems: 'center',
    '@media (max-width: 820px)': {
        fontSize: '1.5em',
    },

}