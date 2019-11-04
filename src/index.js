import React, { useState } from "react";
import ReactDOM from "react-dom";

//Components,
//NavBar is the top navigation bar
//ContentWrapper is the rest of the page below NavBar

import NavBar from "./NavBar/index";
import ContentWrapper from "./Wrapper/index";
import { LoweProvider } from "./contextAPI";
import {
  initialProductState,
  pageInfoState,
  filterByState
} from "./apiDataResult";

//Main Component
export default function App() {
  //Pass the product state to the components / containers
  const [products, setProducts] = useState(initialProductState);

  return (
    <>
      <LoweProvider
        value={{
          products,
          setProducts,
          pageInfoState,
          filterByState
        }}
      >
        <NavBar />
        <br />
        <ContentWrapper />
      </LoweProvider>
    </>
  );
}

//render the app;
ReactDOM.render(<App />, document.getElementById("root"));
