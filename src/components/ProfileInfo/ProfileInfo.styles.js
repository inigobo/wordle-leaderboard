export const ProfileInfoStyle = {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center'

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
    gridArea:'avatar'
}

export const UsernameStyle = {
    fontSize: '1em',
    fontFamily: 'Courier',
    gridArea:'username'

}

export const NameStyle = {
    fontSize: '1em',
    fontWeight: 'bold',
    gridArea:'name',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
}

export const InfoGridStyle = {
    maxWidth: '700px',
    alignSelf: 'center',
    display: 'grid',
    padding: '2em 2em 0 2em',
    gridGap: '0.5em',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateAreas: `
    'avatar stat stat'
    'name stat stat'
    'username empty empty'
    `,
    gridTemplateRows: 'auto',
    gridAutoFlow: 'dense'
}
export const BoardContainerStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '1em 2em 1em 2em'

}