import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";
import { Management } from "./pages/Management";
import { Products } from "./pages/Products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/produtos" element={<Products />} />
      <Route path="/gerenciamento" element={<Management />} />
    </Routes>
  );
}

export default App;
