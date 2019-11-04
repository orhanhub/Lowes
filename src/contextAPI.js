import React from "react";

const LoweContext = React.createContext({});

export const LoweProvider = LoweContext.Provider;
export const LoweConsumer = LoweContext.Consumer;

export default LoweContext;
