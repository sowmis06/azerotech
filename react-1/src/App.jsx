//Router

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Details from "./components/pages/Details";
import NavBar from "./components/NavBar";
import Feedback from "./components/pages/Feedback";
import LoginForm from "./components/pages/LoginForm";
import CategoryMovies from "./components/pages/CategoryMovies";
import Footer from "./components/Footer";
import SignupForm from "./components/pages/SignupForm";

//Router
function App(){
  return(
    
    <BrowserRouter>
    <NavBar />
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/category/:genre" element={<CategoryMovies />} />
        </Routes>

       <Footer />
       
    </BrowserRouter>
  );
}
export default App;