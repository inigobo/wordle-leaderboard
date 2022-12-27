export const UserCardStyle = {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    border: '1px solid black',
    padding:'0.5em',
    borderRadius: '0.75rem',
    boxShadow: 'none !important',
    '&:hover': {
        backgroundColor: 'beige',
    },
    cursor: 'pointer',
}
export const AvatarStyle = {
    width:'5em',
    height: '5em',
    border: 'black solid',
    borderRadius: '0.75rem'
}

export const TitleContainerStyle = {
    width:'4em',
    height: '4em',
    flexGrow: '5',
    border: 'black solid',
    borderRadius: '0.75rem'
}

export const StatsContainerStyle = {
    width:'4em',
    height: '4em',
    flexGrow: '1',
    border: 'black solid',
    borderRadius: '0.75rem'
}