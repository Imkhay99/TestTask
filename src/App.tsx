import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
import TestTask from "./components/testTask/TestTask";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TestTask />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
