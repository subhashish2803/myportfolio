// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom"; // Remove BrowserRouter import
import Portfolio from "./components/Portfolio";
import Navbar from "./components/Navbar";
import SongList from "./components/SongList";

const App = () => {
  return (
    <>
      {/* Navbar is displayed on all pages */}
      <Navbar />

      {/* Define routes for Portfolio and SongList */}
      <Routes>
        <Route path="/" element={<Portfolio />} /> {/* Home page */}
        <Route path="/music" element={<SongList />} /> {/* Music page */}
      </Routes>
    </>
  );
};

export default App;