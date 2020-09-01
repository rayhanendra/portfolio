import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import Navbar from "./NavBar";
import project1 from "../images/pendek.png";
import project2 from "../images/panjang.png";

const useStyles = makeStyles({
  mainContainer: {
    background: "#121212",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "5rem auto",
    background: "skyblue",
  },
});

const Portfolio = () => {
  const classes = useStyles();
  return (
    
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center">
        {/* {Project 1} */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                height="140"
                image={project1}
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project 1
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Culpa Lorem laborum aliquip est magna magna duis ea ad duis
                  excepteur velit culpa. Occaecat culpa elit sunt excepteur ea
                  dolore labore in cupidatat sunt elit mollit eu consectetur. Ex
                  dolore exercitation fugiat do eiusmod dolore officia consequat
                  excepteur labore. Eu Lorem et ad fugiat. Anim labore
                  reprehenderit cupidatat est nisi commodo ullamco aute elit
                  minim do ex laborum tempor. Sint et est laboris esse labore
                  dolore minim amet labore ullamco aute deserunt laboris. Velit
                  qui sint ex commodo dolor enim nulla amet exercitation laborum
                  non ad.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* {Project 2} */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 2"
                height="140"
                image={project2}
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project 2
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Culpa Lorem laborum aliquip est magna magna duis ea ad duis
                  excepteur velit culpa. Occaecat culpa elit sunt excepteur ea
                  dolore labore in cupidatat sunt elit mollit eu consectetur. Ex
                  dolore exercitation fugiat do eiusmod dolore officia consequat
                  excepteur labore. Eu Lorem et ad fugiat. Anim labore
                  reprehenderit cupidatat est nisi commodo ullamco aute elit
                  minim do ex laborum tempor. Sint et est laboris esse labore
                  dolore minim amet labore ullamco aute deserunt laboris. Velit
                  qui sint ex commodo dolor enim nulla amet exercitation laborum
                  non ad.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* {Project 3} */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 2"
                height="140"
                image={project2}
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project 2
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Culpa Lorem laborum aliquip est magna magna duis ea ad duis
                  excepteur velit culpa. Occaecat culpa elit sunt excepteur ea
                  dolore labore in cupidatat sunt elit mollit eu consectetur. Ex
                  dolore exercitation fugiat do eiusmod dolore officia consequat
                  excepteur labore. Eu Lorem et ad fugiat. Anim labore
                  reprehenderit cupidatat est nisi commodo ullamco aute elit
                  minim do ex laborum tempor. Sint et est laboris esse labore
                  dolore minim amet labore ullamco aute deserunt laboris. Velit
                  qui sint ex commodo dolor enim nulla amet exercitation laborum
                  non ad.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* {Project 3} */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 2"
                height="140"
                image={project2}
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project 2
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Culpa Lorem laborum aliquip est magna magna duis ea ad duis
                  excepteur velit culpa. Occaecat culpa elit sunt excepteur ea
                  dolore labore in cupidatat sunt elit mollit eu consectetur. Ex
                  dolore exercitation fugiat do eiusmod dolore officia consequat
                  excepteur labore. Eu Lorem et ad fugiat. Anim labore
                  reprehenderit cupidatat est nisi commodo ullamco aute elit
                  minim do ex laborum tempor. Sint et est laboris esse labore
                  dolore minim amet labore ullamco aute deserunt laboris. Velit
                  qui sint ex commodo dolor enim nulla amet exercitation laborum
                  non ad.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
