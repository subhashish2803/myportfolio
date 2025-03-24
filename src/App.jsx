import React from "react";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Navbar from "./components/Navbar";
import SongList from "./components/SongList";
import BlogSection from "./components/BlogSection";
import BlogPost from "./components/BlogPost";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/music" element={<SongList />} />
        <Route path="/blog" element={<BlogSection />} />
        <Route path="/blog/:postId" element={<BlogPost />} /> {/* Dynamic Blog Post Route */}
      </Routes>
    </>
  );
};

export default App;
