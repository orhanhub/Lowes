import React, { useState } from "react";
import { Grid, FormControlLabel, Checkbox } from "@material-ui/core/";

export default function MapSelectorDetails({ values }) {
  return (
    <Grid container spacing={1}>
      {values.map(i => (
        <Grid item xs={12} key={i.title}>
          <FormControlLabel
            control={
              <Checkbox checked={i.checked} value={i.title} color="primary" />
            }
            label={i.title + " (" + i.items + ")"}
          />
        </Grid>
      ))}
    </Grid>
  );
}
