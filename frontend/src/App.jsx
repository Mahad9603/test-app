import { Route, Routes } from "react-router";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/SignIn.jsx";
import Navbar from "./pages/Navbar.jsx";

function App() {
  return (
    <>
      <div className="bg-[#0e0f0f] text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
