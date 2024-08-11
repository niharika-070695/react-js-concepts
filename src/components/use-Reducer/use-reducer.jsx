import { useReducer } from "react";
const initialState = {
  showTextFlag: false,
  changeTextStylesFlag: false,
};

const HIDE_TEXT = "HIDE_TEXT";
const SHOW_TEXT = "SHOW_TEXT";
const CHANGE_TEXT_STYLE = "CHANGE_TEXT_STYLE";

function reducer(state, action) {
  switch (action.type) {
    case "HIDE_TEXT":
      return state;
    case "SHOW_TEXT":
      return state;
    case "CHANGE_TEXT_STYLE":
      return state;
    default:
      return state;
  }
}
function UseReducerExample() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h3>Use Reducer Hook Example</h3>
      <button onClick={() => dispatch({ type: HIDE_TEXT })}>Hide Text</button>
      <button onClick={() => dispatch({ type: SHOW_TEXT })}>Show text</button>
      <button onClick={() => dispatch({ type: CHANGE_TEXT_STYLE })}>
        Toggle Text Styles
      </button>
    </div>
  );
}

export default UseReducerExample;
