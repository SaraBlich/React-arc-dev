import React from 'react';
import Lottie from 'react-lottie';
import {Link} from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import IconButton from '@material-ui/core/IconButton';

import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';


const useStyles = makeStyles(theme => ({


}))

export default function CustomSoftware(props)
{
    const classes = useStyles();

    return(
        <Grid container direction = "column">
            <Grid item container direction = "row">
                <Grid item>
                <IconButton>
                    <img src = {backArrow} alt = "Back to Services Page"/>
                </IconButton>
                </Grid>   
                <Grid item container direction = "column">
                    <Grid item>
                        <Typography variant = "h2">Custom Software Development</Typography>
                    </Grid>
                    <Grid item>
                        <Typography 
                        variant = "body1" 
                        paragraph>
                            Whether we`re replacing old software or inventing new solutions, Arc Development is here to help your business tackle technology.
                        </Typography>
                        <Typography 
                        variant = "body1" 
                        paragraph>
                            Using regular commercial software leaves you with a lot of stuff you don't need, without some of the stuff you need and ultimately controls the way you work. 
                            Without using any software at all you risk falling behind competitors and missing out on huge savings from increased efficency.
                        </Typography>
                        <Typography 
                        variant = "body1" 
                        paragraph>
                          Our custom solutions are designed from the ground up with your needs, want and goals at the core. This collaborative process produces finely tuned software that is much more effective at improving your workflow and reducing costs than generalized options.
                        </Typography>
                        <Typography 
                        variant = "body1" 
                        paragraph>
                          We create exactly what you want, exactly how you want it. 
                        </Typography>

                    </Grid>
                </Grid>
                <Grid item>
                    <img src = {forwardArrow} alt = "Forward to iOS/Android App Development Page"/>
                </Grid>
            </Grid>
        </Grid>
    )
}