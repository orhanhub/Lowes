import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { InputLabel, MenuItem, FormControl, Select } from "@material-ui/core/";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 100
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function SimpleSelect({ sortInput, onChange }) {
  //Component Styling:
  const classes = useStyles();

  //To expand the dropdown box size to fit the input length:
  const inputLabel = React.useRef("null");
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} id="dropdown-outlined-label">
          Sort by:
        </InputLabel>
        <Select
          labelId="dropdown-outlined-label"
          id="dropdown-outlined"
          value={sortInput}
          onChange={onChange}
          labelWidth={labelWidth}
          autoWidth
        >
          <MenuItem value={"RatingAscend"}>Rating Low to High</MenuItem>
          <MenuItem value={"RatingDescend"}>Rating High to Low</MenuItem>
          <MenuItem value={"PriceAscend"}>Price Low to High</MenuItem>
          <MenuItem value={"PriceDescend"}>Price High to Low</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
