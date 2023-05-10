import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CartProvider } from "./context/CartProvider";
import { PorductsProvider } from "./context/ProductsProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PorductsProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </PorductsProvider>
  </React.StrictMode>
);
