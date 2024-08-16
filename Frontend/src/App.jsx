import Contactpage from "./Contact/Contactpage";
import Courses from "./Courses/Courses";
import Signuppage from "./Signup/Signuppage";
import Home from "./home/Home";
import {Routes, Route, Navigate} from "react-router-dom"
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";

export default function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser)
  return (
    <>
      {/* <Home />
      <Course /> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Course" element={authUser?<Courses />:<Navigate to='/Signup'/>} />
        <Route path="/Contact" element={<Contactpage />} />
        <Route path="/Signup" element={<Signuppage />} />
      </Routes>
      <Toaster />
    </>
  )
}