import React, {useContext} from "react";
import { withStyles } from "@material-ui/core/styles";
import {GoogleLogout} from 'react-google-login'
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Typography from "@material-ui/core/Typography";
import Context from '../../context'
import {unstable_useMediaQuery as useMediaQuery} from '@material-ui/core/useMediaQuery' 
const Signout = ({ classes }) => {
const {dispatch}  = useContext(Context)
const mobileSize = useMediaQuery('(max-width:650px)')
const onSignout =()=>{
  dispatch({type:'SIGNOUT_USER'})
  console.log("signed out user")
}
  return (
  <GoogleLogout
  onLogoutSuccess={onSignout}
  render={({onClick})=>(
    <span className={classes.root} onClick={onClick}>
    <Typography
    variant="body1"
    style={{display:mobileSize?"none":"block"}}
    className={classes.buttonText}
    >

      Signout
    </Typography>
    <ExitToAppIcon className={classes.buttonIcon}/>
    </span>
  )}
  
  />)
};

const styles = {
  root: {
    cursor: "pointer",
    display: "flex"
  },
  buttonText: {
    color: "white"
  },
  buttonIcon: {
    marginLeft: "5px",
    color: "white"
  }
};

export default withStyles(styles)(Signout);
