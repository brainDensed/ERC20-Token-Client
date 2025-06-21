import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { WalletProvider } from "./components/WalletContext.jsx";

createRoot(document.getElementById("root")).render(
  <WalletProvider>
    <App />
  </WalletProvider>
);
