import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Aruba from "./pages/Aruba";
import Escocia from "./pages/Escocia";
import GrandCanyon from "./pages/GrandCanyon";
import MuralhasDaChina from "./pages/MuralhasDaChina";
import NotFound from "./components/NotFound";

export default function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grand-canyon" element={<GrandCanyon />} />
        <Route path="/escocia" element={<Escocia />} />
        <Route path="muralhas-da-china" element={<MuralhasDaChina />} />
        <Route path="/aruba" element={<Aruba />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
