import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from "./context/AuthContext.jsx";
import { LanguageProvider } from "./context/LanguageContext.jsx";
import { CommentProvider } from "./context/CommentContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <LanguageProvider>
        <CommentProvider>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </CommentProvider>
      </LanguageProvider>
    </AuthProvider>
  </StrictMode>
);
