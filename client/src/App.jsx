import "./App.css";
import Chat from "./components/Dashboard/ChatApp";
import Home from "./components/Home/Home";
import ReportedVoter from "./components/Voters/Voters";
import Incident from "./components/Incidents/Incidents";
import Karyakartha from "./components/Karyakarthas/Karyakarthas";
// Import BrowserRouter and Route from React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Home/Header";
import Viewkaryakartha from "./components/Karyakarthas/viewkaryakartha";
import Addkaryakartha from "./components/Karyakarthas/addkaryakartha";

function App() {
  return (
    // Wrap your App component with the BrowserRouter componen
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/karyakartha" element={<Karyakartha />} />
          <Route path="/notifications" element={<Chat />} />
          <Route path="/reportedvoters" element={<ReportedVoter />} />
          <Route path="/reportedincidents" element={<Incident />} />
          <Route path="/" element={<Home />} index />
          <Route path="/viewpage" element={<Viewkaryakartha />} />
          <Route path="/addkaryakartha" element={<Addkaryakartha />} index />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
