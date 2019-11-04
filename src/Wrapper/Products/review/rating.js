import React from "react";
import { Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

export default function ReviewRating() {
  const [rating, setRating] = React.useState(0);

  return (
    <>
      <Typography>Overall Rating</Typography>
      <Rating
        name="simple-controlled"
        value={rating}
        onChange={(event, newRating) => {
          setRating(newRating);
        }}
      />
    </>
  );
}
