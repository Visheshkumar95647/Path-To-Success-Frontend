import React, { useEffect } from "react";
import Home from "../../client/src/Components/Home";
import "./Components/App.css";
import Postjob from "../../client/src/Components/Postjob";
import Getalljobdetail from "../../client/src/Components/Getalljobdetail";
import Useregister from "../../client/src/Components/Useregister";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RequireAuth from "./Components/RequireAuth";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
export default function App() {
  return (
    <>
    <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adduser" element={<Useregister />} />
          <Route path="/postjob" element={<Postjob />} />
          {/* Wrap Getalljobdetail with RequireAuth */}
          <Route
            path="/getalljob"
            element={
              <RequireAuth>
                <Getalljobdetail />
              </RequireAuth>
            }
          />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}
