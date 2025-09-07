import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { IsSideBarProvider } from "./context/SideBarContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
        <IsSideBarProvider>
          <App />
        </IsSideBarProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
