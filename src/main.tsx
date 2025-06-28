import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router";
import router from "./router/RootLayout.tsx";
import { Provider } from "react-redux";
import { store } from "./Redux/StoreRedux.tsx";
import { ThemeProvider } from "./Provider/themeProvider.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
