import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { PayContext } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <PayContext>
      <Router>
        <App />
      </Router>
    </PayContext>
  </React.StrictMode>,
  document.getElementById("root")
);
