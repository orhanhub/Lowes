import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(0)
  }
}));

export default function ReviewRecommend() {
  const classes = useStyles();
  const [recommend, setRecommend] = React.useState("yes");

  const handleRecommendChange = event => {
    setRecommend(event.target.value);
  };

  return (
    <>
      <FormControl
        component="fieldset"
        className={classes.formControl}
        required={true}
      >
        <FormLabel component="legend">
          Would you recommend this product to a friend?
        </FormLabel>
        <RadioGroup
          aria-label="recommendation"
          name="gender1"
          value={recommend}
          onChange={handleRecommendChange}
          row
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
    </>
  );
}
