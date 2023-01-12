
const PresentCardStyles = {
    backgroundColor: '#e4a81d',
}

const MissingCardStyles = {
    backgroundColor: '#757575'
}

const CorrectCardStyles = {
    backgroundColor: '#43a047',
}

const WhiteCardStyles = {
    backgroundColor: 'white',
    border: '2px solid rgb(224, 224, 224)'
}
export const CardLayoutStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxWidth: '62px',
    height: '100%',
    maxHeight: '62px',
    color: 'white',
    backgroundColor: 'white',
    border: '2px solid rgb(224, 224, 224)',
    borderColor: 'rgb(224, 224, 224)',
    fontSize: '1.875rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    borderRadius: '5px',
    userSelect: 'none',
    cursor: 'default',
    variants: {
        paint: {
            w: { //not played, white
                ...WhiteCardStyles
            },
            c: { //correct, green
                ...CorrectCardStyles
            },
            p: { //present, yellow
                ...PresentCardStyles
            },
            m: { //missing, grey
                ...MissingCardStyles
            },

        }
    }
}
