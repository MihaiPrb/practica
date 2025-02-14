import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DosarTransportPage from "./pages/DosarTransportPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";
import RegisterPage from "./pages/RegisterPage";
import StatusPage from "./pages/StatusPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/dosar-transport" element={<DosarTransportPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/status" element={<StatusPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
