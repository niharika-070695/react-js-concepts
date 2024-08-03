import { useState } from "react";

import "./App.css";
import ClassBasedComponent from "./components/class-based-component";
import FunctionalComponent from "./components/functional-component";
import ProductList from "./components/products";
import Nav from "./components/users/Nav";
import { Route, Routes } from "react-router-dom";
import Users from "./components/users/index";
import ContextButtonComponent from "./components/context-concept/button";
import ContextTextComponent from "./components/context-concept/text";
const dummyProductData = ["Product 1", "Product 2", "Product 3"];
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>React JS Concepts 2024</h1>
      <Nav />
      <ContextButtonComponent />
      <ContextTextComponent />
      {/* <Routes>
        <Route path={"/users"} element={<Users />} />
      </Routes> */}
      <br />
      <br />
      <ClassBasedComponent />
      <FunctionalComponent />
      <ProductList
        sampleData={dummyProductData}
        name="Niharika"
        city="Missouri"
      />
    </div>
  );
}

export default App;
