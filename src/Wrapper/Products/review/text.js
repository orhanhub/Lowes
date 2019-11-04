import React, { useState } from "react";
import { TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}));

export default function ReviewText() {
  const classes = useStyles();
  const [reviewtxt, setReview] = useState("");
  const [length, setLength] = useState(20);

  const handleChange = id => event => {
    setReview(([id] = event.target.value));
  };

  const handleLengthChange = event => {
    setLength(20 - event.target.value.length);
  };

  return (
    <form className={classes.container} noValidate>
      <TextField
        required
        id="review-title-required"
        className={classes.textField}
        label="Review Title"
        placeholder="What is the title of your review?"
        onChange={handleLengthChange}
        margin="normal"
        variant="outlined"
        fullWidth
        InputLabelProps={{ shrink: true }}
      />
      {length > -1 ? (
        <Typography>{length} characters left</Typography>
      ) : (
        <Typography color="secondary">{-length} extra characters</Typography>
      )}
      <TextField
        required
        id="review-body-required"
        className={classes.textField}
        label="Review Body"
        onChange={handleChange}
        margin="normal"
        variant="outlined"
        fullWidth
        multiline
        rows="5"
        InputLabelProps={{ shrink: true }}
      />
    </form>
  );
}
