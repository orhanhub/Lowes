//React, Hooks and Context API components
import React, { useState, useContext } from "react";
import { Grid, Typography } from "@material-ui/core/";

//Lowe Components
import Breadcrumb from "./Breadcrumbs";
import SimpleExpansionPanel from "./Selectors/index";
import Products from "./Products/index";
import DropdownSelect from "./Dropdown/index";
import LoweContext from "../contextAPI";

//This module wraps the overall content below the NavBar

export default function ContentWrapper() {
  //Pass the Redux like provider container context to the component
  const { pageInfoState } = useContext(LoweContext);

  //For the dropdown box on page;
  //Use case: sorting order state feeds product view ordering;
  const [sortby, setSortOrder] = React.useState("");
  const handleSortChange = event => {
    setSortOrder(event.target.value);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Breadcrumb />
      </Grid>
      <Grid item xs={9}>
        <Typography variant="h5">{pageInfoState.pgtitle}</Typography>
      </Grid>
      <Grid item xs={3}>
        <DropdownSelect sortInput={sortby} onChange={handleSortChange} />
      </Grid>
      <Grid item xs={3} lg={2}>
        <SimpleExpansionPanel />
      </Grid>
      <Grid item xs={9} lg={10}>
        <Products sortby={sortby} />
      </Grid>
    </Grid>
  );
}
