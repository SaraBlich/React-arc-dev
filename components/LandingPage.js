import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonArrow from '../components/UI/ButtonArrow'
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import animationData from '../animations/landinganimation/data';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websitesIcon from '../assets/websiteIcon.svg';
import revolutionBackground from '../assets/repeatingBackground.svg';

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
        ...theme.typography.learnButton,
        fontSize: "0.9rem",
        height: 45,
        width: 145,
        
    },
    learnButton:
    {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("sm")]:
        {
            marginBottom: "2em"
        }
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
    },
    specialText:
    {
        fontFamily: "Pacifico",
        color: theme.palette.common.orange
    },
    subtitle:
    {
        marginBottom: "1em"
    },
    icon:
    {
        marginLeft: "2em",
        [theme.breakpoints.down("xs")]:
        {
            marginLeft: 0
        }
    },
    serviceContainer:
    {
        marginTop: "12em",
        [theme.breakpoints.down("sm")]:
        {
            padding: 25
        }
    },
    revolutionBackground:
    {
        backgroundImage: `url(${revolutionBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%"
    },
    revolutionCard:
    {
        position: "absolute",
        boxShadow: theme.shadows[10],
        borderRadius: 15,
        padding: "10em",
        [theme.breakpoints.down("sm")]:
        {
            paddingTop: "8em",
            paddingBottom: "8em",
            paddingLeft: "0",
            paddingRight: "0",
            borderRadius: 0,
            width: "100%"
        }
    }

}));

export default function LandingPage(){
   
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    
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
            {/* ------------------------Hero Block---------------------- */}
                <Grid container direction = "row" justify = "flex-end" alignItems = "center" >
                    <Grid sm item className = {classes.heroTextContainer}>
                        <Typography align = "center" variant = "h2">Bringing West Coast Technology <br/> to the Midwest
                        </Typography>
                        <Grid container justify = "center" className = {classes.buttonContainer} alignItems = "center">
                            <Grid item>
                                <Button variant = "contained" className = {classes.estimateButton}> Free Estimate
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant = "outlined" className = {classes.learnButton}>
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
            <Grid item>
                {/* -------------------Custom Software-------------------- */}
                <Grid container justify = {matchesSM ? "center" : undefined} direction = "row" className = {classes.serviceContainer}>
                    <Grid item style = {{marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined}}>
                        <Typography variant = "h4">
                            Custom Software Development
                        </Typography>
                        <Typography variant = "subtitle1" className = {classes.subtitle}>
                            Save Energy. Save Time. Safe Money.
                        </Typography>
                        <Typography  variant = "subtitle1">
                            Complete digital solutions, from investigation to {" "} <span className = {classes.specialText}>celebration</span>.
                        </Typography>
                        <Button variant = "outlined" className = {classes.learnButton}>
                            <span style = {{marginRight: 10}}>Learn More</span>
                            <ButtonArrow width = {10} height = {10} fill = {theme.palette.common.blue} />
                        </Button>
                    </Grid>
                    <Grid item>
                        <img alt = "custom software icon" src = {customSoftwareIcon} className = {classes.icon} />
                    </Grid>
                </Grid>

                 {/* -------------------iOS/Android-------------------- */}
                 <Grid 
                 container
                 justify = {matchesSM ? "center" : "flex-end"}
                 direction = "row" 
                 className = {classes.serviceContainer}>
                    <Grid item style = {{marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined}}>
                        <Typography variant = "h4">
                           iOS/Android App Development
                        </Typography>
                        <Typography variant = "subtitle1" className = {classes.subtitle}>
                            Extend Functionality. Extend Access. Increase Engagement.
                        </Typography>
                        <Typography  variant = "subtitle1">
                            Integrate your web experience or create a standalone app{matchesSM ? null : <br/>} with either mobile platform
                        </Typography>
                        <Button variant = "outlined" className = {classes.learnButton}>
                            <span style = {{marginRight: 10}}>Learn More</span>
                            <ButtonArrow width = {10} height = {10} fill = {theme.palette.common.blue} />
                        </Button>
                    </Grid>
                    <Grid item style = {{marginRight: matchesSM ? 0 : "5em"}}>
                        <img alt = "mobiles icon" src = {mobileAppsIcon} className = {classes.icon} />
                    </Grid>
                </Grid>
                 {/* -------------------Website Development-------------------- */}
                 <Grid container justify = {matchesSM ? "center" : undefined} direction = "row" className = {classes.serviceContainer}>
                    <Grid item style = {{marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined}}>
                        <Typography variant = "h4">
                            Website Development
                        </Typography>
                        <Typography variant = "subtitle1" className = {classes.subtitle}>
                            Reach More. Discover More. Sell More.
                        </Typography>
                        <Typography  variant = "subtitle1">
                           Optimized for Search Engines, built for speed.
                        </Typography>
                        <Button variant = "outlined" className = {classes.learnButton}>
                            <span style = {{marginRight: 10}}>Learn More</span>
                            <ButtonArrow width = {10} height = {10} fill = {theme.palette.common.blue} />
                        </Button>
                    </Grid>
                    <Grid item>
                        <img alt = "website icon" src = {websitesIcon} className = {classes.icon} />
                    </Grid>
                </Grid>
                
            </Grid>
         {/* -------------------Revolution card-------------------- */}
            <Grid item>
                <Grid container style = {{height: "100em", marginTop: "10em"}} alignItems = "center" justify = "center">
                <Card className = {classes.revolutionCard}>
                    <CardContent>
                        <Grid container direction = "column">
                            <Grid item>
                                <Typography variant = "h3" gutterBottom style = {{textAlign: "center"}}>
                                    The Revolution
                                </Typography>
                                </Grid>
                                <Grid item style = {{textAlign: "center"}}>
                                    <Typography variant = "subtitle1">
                                        Visionary insights coupled with cutting-edge technology is a recipe for revolution.
                                    </Typography>
                                    <Button variant = "outlined" className = {classes.learnButtonHero}>
                                    <span style = {{marginRight: 10}}> Learn More </span>
                                <ButtonArrow width = {15} height = {15} fill = {theme.palette.common.blue}/>
                                </Button>
                            </Grid>
                        </Grid>

                    </CardContent>
                </Card>
                <div className = {classes.revolutionBackground} />
            </Grid>
            </Grid>
            
        </Grid>
    
    );
}

//gutterBottom for the gap beneath 'the revolution' h3