import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ProductList from "./Project/ProductList.jsx";
import Coba from "./Project/ProductList.jsx";
import Shop from "./Project/app.jsx";
import LoginPage from "./Project/loginPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Shop />
  </StrictMode>
);
