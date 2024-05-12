import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./output.css";
import Navbar from "./components/navbar.tsx";
import { FooterComponent } from "./components/footer-component.tsx";
import "flowbite";
import { ModalContextProvider } from "./context/modal-context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <ModalContextProvider>
      <App />
    </ModalContextProvider>
    <FooterComponent />
  </React.StrictMode>
);
