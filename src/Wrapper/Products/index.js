import React, { useContext, useState, useEffect } from "react";
import { Grid, Paper, Typography } from "@material-ui/core/";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";

//Components
import Review from "./review/index";
import LoweContext from "../../contextAPI";

//Styling
const useStyles = makeStyles({
  paper: {
    height: "400px"
  },
  img: {},
  typo: {
    padding: "10px"
  },
  rating: {
    padding: "10px"
  }
});

export default function Products({ sortby }) {
  const classes = useStyles();

  //Subscribe to the state
  const { products, setProducts } = useContext(LoweContext);

  //Component Did Update for useEffect Hook
  //state is updated per dropbown selection change;

  function handleSortChange(criterion) {
    if (criterion === "PriceAscend") {
      let newArray = products.slice();
      setProducts(newArray.sort((a, b) => (a.price > b.price ? 1 : -1)));
    }

    if (criterion === "PriceDescend") {
      let newArray = products.slice();
      setProducts(newArray.sort((a, b) => (a.price < b.price ? 1 : -1)));
    }

    if (criterion === "RatingAscend") {
      let newArray = products.slice();
      setProducts(newArray.sort((a, b) => (a.rating > b.rating ? 1 : -1)));
    }

    if (criterion === "RatingDescend") {
      let newArray = products.slice();
      setProducts(newArray.sort((a, b) => (a.rating < b.rating ? 1 : -1)));
    }
  }
  useEffect(() => {
    handleSortChange(sortby);
  }, [sortby]);

  //The component render
  //Math.random is temporary and known hacky fix, as the input is not unique
  return (
    <Grid container spacing={2}>
      {products.map(i => (
        <Grid item xs={12} md={3} key={Math.random()}>
          <Paper className={classes.paper}>
            <img src={i.imgurl} className={classes.img} />
            <Typography className={classes.typo}>{i.title}</Typography>
            <Typography className={classes.typo}>${i.price}</Typography>
            <Rating className={classes.rating} value={i.rating} />
            <Review value={i.title} />
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
