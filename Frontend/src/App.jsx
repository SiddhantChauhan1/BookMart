import Contactpage from "./Contact/Contactpage";
import Courses from "./Courses/Courses";
import Signuppage from "./Signup/Signuppage";
import Home from "./home/Home";
import {Routes, Route} from "react-router-dom"

export default function App() {
  return (
    <>
      {/* <Home />
      <Course /> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Course" element={<Courses />} />
        <Route path="/Contact" element={<Contactpage />} />
        <Route path="/Signup" element={<Signuppage />} />
      </Routes>
    </>
  )
}