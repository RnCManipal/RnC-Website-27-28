import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Vedanth from "./components/Vedanth/Vedanth";
import Team from "./components/Team/Team";
import Footer from "./Footer/Footer";
import Aluminis from "./components/Team/Alumini";
import Projects from "./components/Projects/Projects";
import Home from "./components/Home/Home";
import ScrollToTop from './utils/ScrollToTop';
import ProjectDetail from "./components/Projects/ProjectDetail";
import Blog from "./components/Blog/Blog";
import BlogPost from "./components/Blog/BlogPost";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/vedanth" element={<Vedanth />} />
        <Route path="/team/2026" element={<Team />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team/alumni" element={<Aluminis />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
