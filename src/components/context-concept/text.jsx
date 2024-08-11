import { GlobalContext } from "../context";
import { useContext } from "react";

function ContextTextComponent() {
  const { theme } = useContext(GlobalContext); //destructuring
  return (
    <h1
      style={{
        fontSize: theme === "light" ? "50px" : "100px",
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "blue" : "yellow",
      }}
    >
      Niharika Voodem
    </h1>
  );
}
export default ContextTextComponent;
