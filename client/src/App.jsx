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
import Updateprofile from "./components/Karyakarthas/updateprofile";
import Voters from "./GetVoters/Voters";
import Chandra from "./GetVoters/Chandra";

function App() {
  return (
    // Wrap your App component with the BrowserRouter componen
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/karyakartha" element={<Karyakartha />} />
          <Route path="/notifications" element={<Chat />} />
          <Route path="/voters" element={<Voters />} /> 
          <Route path="/chandra" element={<Chandra />} />
          <Route path="/reportedvoters" element={<ReportedVoter />} />
          <Route path="/reportedincidents" element={<Incident />} />
          <Route path="/" element={<Home />} index />
          <Route path="/viewpage" element={<Viewkaryakartha />} />
          <Route path="/updateprofile" element={<Updateprofile />} />
          <Route path="/addkaryakartha" element={<Addkaryakartha />} index />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
