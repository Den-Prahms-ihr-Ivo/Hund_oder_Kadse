import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.tsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { IsSideBarProvider } from "./context/SideBarContext.tsx";
import { QuestionCategoriesProvider } from "./context/QuestionCategoryContext.tsx";
import { PenaltyCategoriesProvider } from "./context/PenaltyCategoryContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
        <IsSideBarProvider>
          <QuestionCategoriesProvider>
            <PenaltyCategoriesProvider>
              <App />
            </PenaltyCategoriesProvider>
          </QuestionCategoriesProvider>
        </IsSideBarProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
