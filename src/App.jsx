import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Admission from "./pages/Admission";
import Students from "./pages/Students";
import Footer from "./components/Footer";
import Courses from "./pages/Courses";

function App() {
  return (
    <div className="overflow-x-hidden">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/admissions" element={<Admission />} />
          <Route path="/students" element={<Students />} />
          <Route path="courses" element={<Courses />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
