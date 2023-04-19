import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Aruba from "./pages/Aruba";
import Escocia from "./pages/Escocia";

export default function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aruba" element={<Aruba />} />
        <Route path="/escocia" element={<Escocia />} />
      </Routes>
    </BrowserRouter>
  );
}
