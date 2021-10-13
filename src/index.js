// NPM packages
import React from "react";
import ReactDOM from "react-dom";

// Project files
import { DealershipProvider } from "./state/DealershipProvider";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <DealershipProvider>
      <App />
    </DealershipProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
