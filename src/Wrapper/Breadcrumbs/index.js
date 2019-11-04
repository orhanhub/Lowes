import React, { useContext } from "react";
import { Breadcrumbs, Link, Typography } from "@material-ui/core";
import LoweContext from "../../contextAPI";

export default function Breadcrumb() {
  //Subscribe to the state
  const { pageInfoState } = useContext(LoweContext);

  return (
    <Breadcrumbs separator=">" aria-label="breadcrumb">
      <Link href="/">{pageInfoState.bc_lvl1}</Link>
      <Link href="/christmasDecorations">{pageInfoState.bc_lvl2}</Link>
      <Typography color="textPrimary">{pageInfoState.bc_lvl3}</Typography>
    </Breadcrumbs>
  );
}
