import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CalculadoraTMB from "./pages/CalculadoraTMB";
import ThankYouPage from "./pages/ThankYouPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/calculadora" element={<CalculadoraTMB />} />
        <Route path="/obrigado" element={<ThankYouPage />} />
      </Routes>
    </BrowserRouter>
  );
}
