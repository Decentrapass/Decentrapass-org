import React from "react";
import ReactDOM from "react-dom";

// STYLES
import "./styles/index.scss";
import "./styles/reset.scss";

// COMPONENTS
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
