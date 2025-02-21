// import { useState } from 'react'
// import './App.css'

import Home from "./components/FunctionalComponent/Home";
import About from "./components/FunctionalComponent/About";
import Contact from "./components/FunctionalComponent/Contact";
import Gallery from "./components/FunctionalComponent/Gallery";
import Login from "./components/FunctionalComponent/Login";
import Signup from "./components/FunctionalComponent/Signup";
import Navbar from "./components/FunctionalComponent/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseEffect from "./components/FunctionalComponent/Hooks/UseEffect";
import UseState from "./components/FunctionalComponent/Hooks/UseState";
import UseEffectAPI from "./components/FunctionalComponent/Hooks/UseEffectAPI";
import UseRef from "./components/FunctionalComponent/Hooks/UseRef";
import UseMemo from "./components/FunctionalComponent/Hooks/UseMemo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home props="Hello" sjit="SJIT" />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/use-effect' element={<UseEffect/>} />
          <Route path='/use-state' element={<UseState/>} />
          <Route path="/use-effect-api" element={ <UseEffectAPI/> } />
          <Route path="/use-ref" element={<UseRef/>} />
          <Route path="/use-memo" element={<UseMemo/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
