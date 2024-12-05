import React from "react";
import ReactDOM from "react-dom/client";
import colors from "./assets/colors/index.tsx";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";


const rootElement = document.getElementById("root")!;
rootElement.style.setProperty("--primary-color", colors().primary);
rootElement.style.setProperty("--secondary-color", colors().secondary);
rootElement.style.setProperty("--tertiary-color", colors().tertiary);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
