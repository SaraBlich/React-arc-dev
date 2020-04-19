import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonArrow from '../components/UI/ButtonArrow'
import Typography from '@material-ui/core/Typography';


import animationData from '../animations/landinganimation/data';

const useStyles = makeStyles(theme => ({
    animation:
    {
        maxWidth: "50em",
        minWidth: "21em",
        marginTop: "2em",
        marginLeft: "10%",
        [theme.breakpoints.down("sm")]:
        {
            maxWidth: "30em"
        }
    },
    estimateButton:
    {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.orange,
        borderRadius: 50,
        height:45,
        weight: 145,
        marginRight: 40,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },
    buttonContainer:
    {
        marginTop: "1em"
        
    },
    learnButtonHero:
    {
        borderColor:theme.palette.common.blue,
        borderWidt: 2,
        textTransform: "none",
        borderRadius: 50,
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: "0.9rem",
        height: 45,
        width: 145,
        color: theme.palette.common.blue
    },
    mainContainer:
    {
        marginTop: "5em",
        [theme.breakpoints.down("md")]:
        {
            marginTop: "3em"
        },
        [theme.breakpoints.down("xs")]:
        {
            marginTop: "2em"
        }

    },
    heroTextContainer:
    {
        minWidth: "21.5em",
        marginLeft: "1em",
        [theme.breakpoints.down("xs")]:
        {
            marginLeft: 0
        }
    }

}));

export default function LandingPage(){
   
    const classes = useStyles();
    const theme = useTheme();
    
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <Grid container direction = "column" className = {classes.mainContainer}>
            <Grid item>
                <Grid container direction = "row" justify = "flex-end" alignItems = "center">
                    <Grid sm item className = {classes.heroTextContainer}>
                        <Typography align = "center" variant = "h2">Bringing West Coast Technology <br/> to the Midwest
                        </Typography>
                        <Grid container justify = "center" className = {classes.buttonContainer} alignItems = "center">
                            <Grid item>
                                <Button variant = "contained" className = {classes.estimateButton}> Free Estimate
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant = "outlined" className = {classes.learnButtonHero}>
                                    <span style = {{marginRight: 10}}> Learn More </span>
                                <ButtonArrow width = {15} height = {15} fill = {theme.palette.common.blue}/>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid sm item className = {classes.animation}>
                      <Lottie options = {defaultOptions} height = {"100%"} width = {"100%"} />
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    
    );
}
