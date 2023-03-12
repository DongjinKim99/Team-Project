import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const container: any = document.getElementById("app");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
