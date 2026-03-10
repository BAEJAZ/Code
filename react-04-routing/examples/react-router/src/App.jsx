import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import BlogPost from "./components/BlogPost";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <div className="App">
      <header>
        <nav className="nav">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          {/* Home shows the blog list */}
          <Route path="/" element={<Home />} />

          {/* Dynamic blog post route: /blog/1, /blog/2  */}
          <Route path="/blog/:id" element={<BlogPost />} />

          {/* Simple about page */}
          <Route path="/about" element={<About />} />

          {/* Catch all for unknown routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}


import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

// Navigate to another route
navigate("/some-path");


