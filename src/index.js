import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");

createRoot(container).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
