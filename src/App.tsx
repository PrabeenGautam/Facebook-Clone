import { Route } from "react-router-dom";
import LoginPage from "./pages/auth/Login.page";

function App() {
  return (
    <>
      <Route path="/login" element={<LoginPage />} />
    </>
  );
}

export default App;
