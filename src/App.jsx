import React from "react";
import { RouterProvider } from "react-router-dom";
import mainRouter from "./routers/main-router";
import "./App.css";

function App() {
  return <RouterProvider router={mainRouter} />;
}
export default App;
