export const AvatarStyles = (props) => {
    const DefaultStyle = {
        border: '4px solid lightgrey',
        borderRadius: '4px',
        variants: {
            size: {
                small: {
                    width: '50px',
                    heigth: '50px',
                    borderRadius: '4px',
                },
                medium: {
                    width: '90px',
                    heigth: '90px',
                    borderRadius: '4px',
                },
                big: {
                    width: '140px',
                    heigth: '140px',
                    borderRadius: '7px',
                }
            }
        }
    }

    const SmallStyle = {
            width: '50px',
            heigth: '50px',
        }
    if(props.fixed) {
            return ({
                ...DefaultStyle,
                ...SmallStyle
            })
} else {
    return ({
        ...DefaultStyle
    })
    }

}
