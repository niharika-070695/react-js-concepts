import { GlobalContext } from "../context";
import { useContext } from "react";

function ContextButtonComponent() {
  const { setTheme, theme } = useContext(GlobalContext); //destructuring
  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Change theme
    </button>
  );
}

export default ContextButtonComponent;
