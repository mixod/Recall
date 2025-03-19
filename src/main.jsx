import ReactDom from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryCLient = new QueryClient();

ReactDom.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryCLient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
);
