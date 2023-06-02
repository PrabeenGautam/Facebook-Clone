import { useState } from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./components/routes/PrivateRoute";
import LoginPage from "./pages/auth/Login.page";

function App() {
  const [authenticated, setAuthenticated] = useState();

  return (
    <>
      <Route path="/" element={<LoginPage />} />
      <PrivateRoute />
    </>
  );
}

export default App;
