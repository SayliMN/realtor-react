import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import ForgotPassword from "./pages/ForgotPassword"
import Offers from "./pages/Offers"
<<<<<<< HEAD
=======
import Header from "./components/Header"
>>>>>>> d0b8017 (create header component)

function App() {
  return (
    <>
      <Router>
<<<<<<< HEAD
=======
        <Header/>
        
>>>>>>> d0b8017 (create header component)
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/offers" element={<Offers />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
