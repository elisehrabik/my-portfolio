import { StrictMode} from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./sass/styles.scss";
import "./sass/components/_main.scss";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
