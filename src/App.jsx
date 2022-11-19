import { ToastContainer } from "react-toastify";
import AppRoutes from "./components/common/Routing/AppRoutes";
import "react-toastify/dist/ReactToastify.css";
import React from "react";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <div className="container-fluid">
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
