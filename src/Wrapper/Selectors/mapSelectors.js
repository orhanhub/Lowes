import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography
} from "@material-ui/core/";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

//component
import MapSelectorDetails from "./mapSelectorDetails";

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

export default function MapExpansionPanel({ values }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      {values.map(i => (
        <ExpansionPanel key={i.title}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>{i.title}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <MapSelectorDetails values={i.sub} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </React.Fragment>
  );
}
