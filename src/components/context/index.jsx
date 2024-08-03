import { createContext } from "react";
//create the context

export const GlobalContext = createContext(null);

//create the Golbal state that receive component as Children

function GlobalState({ children }) {
  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
}

export default GlobalState;
