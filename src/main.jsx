import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/Redux/Store.js";
import { AccountProvider } from "./Context/AccountContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AccountProvider>
          <App />
        </AccountProvider>
      </Provider>
      {/* <h1 className="bg-red-900 h-96">hlo</h1> */}
    </BrowserRouter>
  </React.StrictMode>
);
