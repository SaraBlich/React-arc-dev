import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


import logo from '../../assets/logo.svg'

function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  const useStyles = makeStyles(theme => ({
    toolbarMargin: {
      ...theme.mixins.toolbar,
      marginBottom: "3em",
      [theme.breakpoints.down("md")]:{
        height:"2em"
      },
      [theme.breakpoints.down("xs")]:{
        height:"1.25em"
      }

    },
    logo:
    {
      height: "8em",
      [theme.breakpoints.down("md")]: {
        height: "7em"
      },
      [theme.breakpoints.down("xs")]:
      {
        height:"5.5em"
      }
    },
    tabContainer: {
      marginLeft: 'auto'
    },
    tab:{
      ...theme.typography.tab,
      minWidth: 10,
      marginLeft: "25px"
    },
    button:{
      ...theme.typography.estimate,
      borderRadius: "50px",
      marginLeft: "50px",
      marginRight: "25px",
      height: "45px",
    },
    logoContainer:
    {
      padding:0,
      "&:hover":{
        backgroundColor: "transparent"
      }
    },
    menu:{
      backgroundColor: theme.palette.common.blue,
      color: theme.typography.estimate.color,
      borderRadius: "0px"
    },
    menuItem:{
      ...theme.typography.tab,
      opacity: 0.7,
      "&:hover": {opacity: 1}
    },
    drawerIconContainer: {
      "&:hover": {
        backgroundColor: "transparent"
      },
      marginLeft: "auto"
    },
    drawerIcon: {
      height: "50px",
      width: "50px"
    },
    drawer:{
      backgroundColor: theme.palette.common.blue
    },
    drawerItem:{
      ...theme.typography.tab,
      color: "white"
    },
    drawerItemEstimate:{
      backgroundColor: theme.palette.common.orange
    }

  }));


export default function Header(props)
{
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"))

  const [openDrawer, setOpenDrawer]  = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue)
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
    setOpenMenu(true);

  };

  const handleMenuClick = (e, i) => {
    setAnchorEl(null);
    setOpen(false);
    setSelectedIndex(i);
    setOpenMenu(false);
  }

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
    setOpenMenu(false);
  };

  const menuOptions = [{name: "Services", link: "/services"}, {name:"Custom Software Development", link: "/customsoftware"}, {name: "Mobile App Development", link: "/mobileapps"}, {name: "Website Development", link: "/websites"}];

  useEffect(() => {
    if (window.location.pathname === "/" && value !==0)
    {
      setValue(0);
    }
    else if (window.location.pathname === "/services" && value !==1)
    {
      setValue(1);
    }
    else if (window.location.pathname === "/revolution" && value !==2)
    {
      setValue(2);
    }
    else if (window.location.pathname === "/about" && value !==3)
    {
      setValue(3);
    }
    else if (window.location.pathname === "/contact" && value !==4)
    {
      setValue(4);
    }
    else if (window.location.pathname === "/estimate" && value !==5)
    {
      setValue(5);
    }

    switch(window.location.pathname) {
      case "/":
        if (value !== 0) 
        {
          setValue(0)
        }
        break;
      
        
      case "/services":
        if (value !==1) 
        {
           setValue(1)
           setSelectedIndex(0)
        }
        break;
      
        
      case "/customsoftware":
        if (value !==1) 
        { 
          setValue(1)
          setSelectedIndex(1)
        }
        break;
      
       
      case "/mobileapps":
        if(value!==1)
        {
          setValue(1)
          setSelectedIndex(2)
        }
        break;
      
       
      case "/websites":
        if(value!==1)
        {
          setValue(1)
          setSelectedIndex(3)
        }
        break;
      
        
        case "/revolution":
          if(value!==2)
          {
            setValue(2)
          }
          break;
        
          
        case "/about":
          if(value!==3)
          {
            setValue(3)
          }
          break;
        
          
        case "/contact": 
          if(value!==4)
          {
            setValue(4)
          }
          break;
        
          
        case "/estimate": 
          if(value!==5)
          {
            setValue(5)
          }
          break;

        default:
        break; 
    }

  }, [value]);

  const tabs = (
    <React.Fragment>
      <Tabs  value = {value} onChange = {handleChange} className = {classes.tabContainer}>
                <Tab className = {classes.tab} component = {Link} to = "/" label = "Home"/>    
                <Tab 
                aria-owns = {anchorEl ? "simple-menu" : undefined} 
                aria-haspopup = {anchorEl ? "true" : undefined}
                className = {classes.tab} 
                component = {Link} 
                to = "/services" 
                onMouseOver = {event => handleClick(event)}
                label = "Services"/>  
                <Tab className = {classes.tab} component = {Link} to = "/revolution" label = "The Revolution" /> 
                <Tab className = {classes.tab} component = {Link} to = "/about" label = "About Us" />
                <Tab className = {classes.tab} component = {Link} to = "/contact" label = "Contact us" /> 
              </Tabs>
              <Button variant = "contained" color = "secondary" className = {classes.button} component = {Link} to = "/estimate">
                Free Estimate
              </Button>

              <Menu 
              id = "simple-menu" 
              anchorEl = {anchorEl} 
              open = {openMenu} 
              onClose = {handleClose} 
              MenuListProps = {{onMouseLeave: handleClose}}
              classes = {{paper: classes.menu}}
              elevation = {0}
              >
               {menuOptions.map((option, i) => (
                 <MenuItem  key = {option} component = {Link} to = {option.link} classes = {{root:classes.menuItem}} onClick = {(event) => {handleMenuClick(event, i); setValue(1); handleClose()}} selected ={i === selectedIndex && value===1}>
                 {option.name}
                 </MenuItem>
               )) }

              </Menu>

    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer 
      classes = {{paper: classes.drawer}}
      disableBackdropTransition = {!iOS} 
      disableDiscovery = {iOS} 
      open = {openDrawer} 
      onClose = {() => setOpenDrawer(false)} 
      onClose = {() => setOpenDrawer(true)}>
        <List disablePadding>
          <ListItem 
          onClick = {() => {setOpenDrawer(false); setValue(0)}}
          divider
          button
          component = {Link}
          to = "/" 
          selected = {value === 0}>
            <ListItemText className ={classes.drawerItem} disableTypography>Home</ListItemText>
          </ListItem>
          <ListItem 
          onClick = {() => {setOpenDrawer(false); setValue(1)}}
          selected = {value === 1}
          divider
          button
          component = {Link}
          to = "/services" >
            <ListItemText className ={classes.drawerItem}  disableTypography>Services</ListItemText>
          </ListItem>
          <ListItem 
          onClick = {() => {setOpenDrawer(false); setValue(2)}}
          selected = {value === 2}
          divider
          button
          component = {Link}
          to = "/revolution" >
            <ListItemText className ={classes.drawerItem} disableTypography>Revolution</ListItemText>
          </ListItem>
          <ListItem 
          onClick = {() => {setOpenDrawer(false); setValue(3)}}
          selected = {value === 3}
          divider
          button
          component = {Link}
          to = "/about" >
            <ListItemText className ={classes.drawerItem} disableTypography>About</ListItemText>
          </ListItem>
          <ListItem 
          onClick = {() => {setOpenDrawer(false); setValue(4)}}
          selected = {value === 4}
          divider
          button
          component = {Link}
          to = "/contact" >
            <ListItemText className ={classes.drawerItem} disableTypography>Contact</ListItemText>
          </ListItem>
          <ListItem 
          className = {classes.drawerItemEstimate}
          onClick = {() => {setOpenDrawer(false); setValue(5)}}
          selected = {value === 5}
          divider
          button
          component = {Link}
          to = "/estimate" >
            <ListItemText className ={classes.drawerItem}  disableTypography>Free Estimate</ListItemText>
          </ListItem>

        </List>
        </SwipeableDrawer> 
        <IconButton 
        className = {classes.drawerIconContainer}
        onClick = {() => setOpenDrawer(!openDrawer)}>
          <MenuIcon 
          className = {classes.drawerIcon}/>
        </IconButton>
      </React.Fragment>
  )

  

    return(
      <React.Fragment>
        <ElevationScroll>
        <AppBar position = 'fixed' color = "primary">
            <ToolBar disableGutters> 
            <Button component = {Link} to = "/" className = {classes.logoContainer} onClick = {() => setValue(0)} disableRipple>
              <img alt = "company logo " src = {logo} className = {classes.logo} />
              </Button>
              {matches ? drawer : tabs}
              
            </ToolBar>
        </AppBar>
        </ElevationScroll>
        <div className = {classes.toolbarMargin} />
        </React.Fragment>
    );

}

//ad 1. disableGutters let us disable padding (look index.html)
//ad 2. passing the [value] in useEffect provides the code not running infinitely 
//ad 3. disableRipple let us disable on-hover logo 'decoration' like shadow etc.
//ad 4. anchorEl = {anchorEl} open = {open} -> we are seting setstate value
//ad 5. MenuItem onClick = {() => {handleClose(); setValue(1) }} -> if we want to set more than one function we simply do that by setting an arrow function
//ad 6. disableTypography allows the links in the drawer to loose their primal style
//ad 7. classes = {{paper: classes.drawer}} -> we target the paper components this is used and apply our own styling
//ad 8. className ={[classes.drawerItem, classes.drawerItemEstimate]} -> we want to apply both of the stylings, so we pass them in a tab