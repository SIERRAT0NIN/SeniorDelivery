import { StrictMode } from "react";
import App from "./App.tsx";
import "./style/index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import { NextUIProvider } from "@nextui-org/react";
import NavBar from "../components/NavBar.tsx";
// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
          <NavBar />
          <App />
        </ClerkProvider>
      </NextUIProvider>
    </BrowserRouter>
  </StrictMode>
);
