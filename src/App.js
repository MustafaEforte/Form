import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import "antd/dist/antd.css";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Dashboard from "./pages/Dashboard.jsx";
import Error from "./pages/Error.jsx";
import Success from "./pages/Success.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/error404" element={<Error/>}/>
        <Route path="/signupsuccess" element={<Success/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
