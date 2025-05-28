import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import AboutGroup from "./pages/aboutgroup.jsx";
import Kontak from "./pages/Kontak.jsx";
import Produk from "./pages/produk.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tentang" element={<AboutGroup />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/produk" element={<Produk />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
