import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ProgramsPage from "./pages/ProgramsPage"
import ProgramDetailPage from "./pages/ProgramDetailPage"
import PlacementsPage from "./pages/PlacementsPage"
import ContactPage from "./pages/ContactPage"
import CampusPage from "./pages/CampusPage"
import AdmissionsPage from "./pages/AdmissionsPage"
import FacultyPage from "./pages/FacultyPage"
import ResearchPage from "./pages/ResearchPage"
import EventsPage from "./pages/EventsPage"
import NotFoundPage from "./pages/NotFoundPage"

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/programs/:programId" element={<ProgramDetailPage />} />
            <Route path="/placements" element={<PlacementsPage />} />
            <Route path="/campus" element={<CampusPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
            <Route path="/faculty" element={<FacultyPage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
