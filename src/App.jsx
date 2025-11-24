import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Research from './pages/Research';
import Members from './pages/Members';
import Publications from './pages/Publications';
import Activities from './pages/Activities';
import Professor from './pages/Professor';
import Equipment from './pages/Equipment';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { LanguageProvider } from './contexts/LanguageContext';

import './i18n';

function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/professor" element={<Professor />} />
        <Route path="/members" element={<Members />} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </LanguageProvider>
  );
}

export default App;
