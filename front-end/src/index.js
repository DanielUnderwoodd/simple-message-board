import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import MainProvider from "./provider/MainProvider";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <MainProvider>
      <App />
    </MainProvider>
  </BrowserRouter>
);
