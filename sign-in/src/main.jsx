import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import { Landing } from "./Landing.jsx";
import { Success } from "./Success.jsx";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="login" element={<App />} />
        <Route path="login/success" element={<Success />} />
        <Route path="*" element={<h1>404: ページが見つかりません</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
