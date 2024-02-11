import { createRoot } from "react-dom/client";
import App, { browserRouter } from "./App";
import React from "react";
import { CustomProvider } from "rsuite";
import "rsuite/dist/rsuite-no-reset.min.css";
import "./style.css";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { store } from "./redux/store";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CustomProvider theme="dark">
      {" "}
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
    </CustomProvider>
  </React.StrictMode>
);
