import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Link,
  Modal,
  Backdrop,
  Fade,
  Button
} from "@material-ui/core";

import ReviewRating from "./rating";
import ReviewRecommend from "./recommend";
import ReviewText from "./text";

const useStyles = makeStyles(theme => ({
  review: {
    padding: "10px"
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    width: "66%",
    boxShadow: theme.shadows[5],
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function Review({ value }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Typography>
        <Link className={classes.review} href="#" onClick={handleOpen}>
          Write a Review
        </Link>
      </Typography>
      <Modal
        aria-labelledby="review-modal"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 1500
        }}
      >
        <Fade in={open}>
          <Grid container spacing={1} className={classes.paper}>
            <Grid item xs={12}>
              <Typography variant="h5">Write a Review </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">{value}</Typography>
            </Grid>
            <Grid item xs={6}>
              <ReviewRating />
            </Grid>
            <Grid item xs={6}>
              <ReviewRecommend />
            </Grid>
            <Grid item xs={12}>
              <ReviewText />
            </Grid>
            <Button variant="contained" onClick={handleClose}>
              Submit My Review
            </Button>
          </Grid>
        </Fade>
      </Modal>
    </div>
  );
}
