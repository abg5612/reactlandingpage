import React from "react"
import './App.css';
import './Media.css'
import Navbar from "./components/Navbar"
import Signup from './components/Signup';
import Home from './components/Home'
import { HashRouter, Route } from "react-router-dom";
import Testimonial from "./components/Testimonial";
import Goal from "./components/Goal";
import Footer from "./components/Footer";



const router = HashRouter([


  {
    path: "",
    element: <Home />,
  },
  {
    path: "footer",
    element: <Footer />,
  },
  {
    path: "signin",
    element: <Navbar />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "goal",
    element: <Goal />,
  },
  {
    path: "testimonial",
    element: <Testimonial />,
  },

]);



function App() {
  return (
    <div>

      <h1 className="main-temp-head">Media Tube</h1>

      <React.StrictMode>
        <Route router={router} />

      </React.StrictMode>
    </div>
  );
}

export default App;
