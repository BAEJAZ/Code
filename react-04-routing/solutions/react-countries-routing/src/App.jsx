// src/App.jsx
import { Routes, Route, Link } from "react-router-dom";
import CountriesPage from "./components/CountriesPage.jsx";
import AboutPage from "./components/AboutPage.jsx";
import NotFoundPage from "./components/NotFoundPage.jsx";

export default function App() {
  return (
    <div className="app-shell">
      <header className="top-nav">
        <h1 className="app-title">World Population App</h1>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>

      <main className="app-main">
        <Routes>
          {/* Main app */}
          <Route path="/" element={<CountriesPage />} />

          {/* Same page, but with the country coming from the URL */}
          <Route path="/country/:countryName" element={<CountriesPage />} />

          {/* Simple About page */}
          <Route path="/about" element={<AboutPage />} />

          {/* Fallback for unknown URLs */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}
