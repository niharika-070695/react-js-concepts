import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div class="nav">
      <div class="leftPanel flexContainer">
        <h3>React routing</h3>
      </div>
      <div class="rightPanel flexContainer">
        <Link to="/users">Users</Link>
      </div>
    </div>
  );
}

export default Nav;
