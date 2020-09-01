import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box, colors } from "@material-ui/core";
import Typed from "react-typed";
import avatar from "../images/pendek.png";

// CSS STYLES
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "skyblue",
    
  },
  subtitle: {
    color: "grey",
    
  },
  typedContainer: {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    top: "50%",
    left: "50%",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Rayhanendra" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Rayhanendra"]} typeSpeed={40} />
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={["Graphic Design", "Front End Development"]}
          typeSpeed={40}
          backspeed={60}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
