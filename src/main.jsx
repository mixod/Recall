import { StrictMode } from "react";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactDom from "react-dom/client";
ReactDom.createRoot(document.getElementById("root")).render(
  <QueryClientProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
);
