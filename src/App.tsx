import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home.pages";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleShowSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  const handleResizeNavbar = () => {
    if (window.innerWidth < 1280) {
      setShowSidebar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResizeNavbar);
    handleResizeNavbar();
    return () => window.removeEventListener("resize", handleResizeNavbar);
  }, []);

  return (
    <>
      <Navbar handleSidebar={handleShowSidebar} />
      <Routes>
        <Route path="/" element={<Home show={showSidebar} />}></Route>
      </Routes>
    </>
  );
}

export default App;
