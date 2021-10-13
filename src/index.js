// NPM packages
import React from "react";
import ReactDOM from "react-dom";

// Project files
import { VehiclesProvider } from "./state/VehiclesProvider";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <VehiclesProvider>
      <App />
    </VehiclesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
