import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Router>
        <Navbar />
        {/* padding top suficiente para navbar fixa */}
        <div className="pt-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </main>
  );
}

export default App;
