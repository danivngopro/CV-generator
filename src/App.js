// import { useState, useEffect } from "react";
import "./App.css";
import Details from "./pages/Details";
import GeneratedCv from "./pages/GeneratedCv";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="body">
      <Routes>
        <Route path="/" element={<Details />} />
        <Route path="/generatedcv" element={<GeneratedCv />} />
      </Routes>
    </div>
  );
}

export default App;
