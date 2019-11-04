import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography
} from "@material-ui/core/";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
//components
import MapExpansionPanel from "./mapSelectors";
import { filterByState } from "../../apiDataResult";

//styling
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

export default function SimpleExpansionPanel() {
  //use styling class
  const classes = useStyles();

  //use default state;
  const [apiData, setData] = useState(filterByState);

  /*
  //if there was an API call, the state could have been updated with useEffect
  useEffect( () => {
    //create an axios get request function, called handleGetProducts
    //handleGetProducts input is a productID and returns JSON data above

    handleGetProducts(productID).then( data => setData(data))
  })
  */

  //for the availability selector, use once;
  //for other items, map the JSON data returned from API call
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Availability</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>Free Pickup at Brooklyn Lowe's</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <MapExpansionPanel values={apiData} />
    </div>
  );
}
