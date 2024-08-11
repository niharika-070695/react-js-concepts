import { createContext, useState } from "react";
//create the context

export const GlobalContext = createContext(null);

//create the Golbal state that receive component as Children

function GlobalState({ children }) {
  const [theme, setTheme] = useState("light");
  return (
    <GlobalContext.Provider value={{ theme, setTheme }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
