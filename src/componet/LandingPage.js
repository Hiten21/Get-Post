import React from 'react'

import InstaTele from '../Assets/Images/InstaTele.jpeg'
import youtube from '../Assets/Images/youtube.png'
import { Box, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles({
    image: {

        width: '50%',
        height: '50%',
    }
})
function LandingPage() {
    const classes = useStyles();
    return (
        <Box>
            <Typography varient="h4">Code for Interview</Typography>
            <Box style={{ display: 'flex' }}>

                <img className={classes.image} src={InstaTele}></img>
                <img className={classes.image} src={youtube}></img>
            </Box>
        </Box>
    )
}

export default LandingPage
