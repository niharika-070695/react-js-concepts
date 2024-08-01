import { useState } from "react";

import "./App.css";
import ClassBasedComponent from "./components/class-based-component";
import FunctionalComponent from "./components/functional-component";
import ProductList from "./components/products";
const dummyProductData = ["Product 1", "Product 2", "Product 3"];
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>React JS Concepts 2024</h1>
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
