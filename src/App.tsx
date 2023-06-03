import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home.pages";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleShowSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

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
