import { createRoot } from "react-dom/client";
import App, { browserRouter } from "./App";
import React from "react";
import "./style.css";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { store } from "./redux/store";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "./utils/util";
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Provider store={store}>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <RouterProvider router={browserRouter}>
          <App />
        </RouterProvider>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
