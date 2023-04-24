import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import About from "./pages/about/About";
import ContactUs from "./pages/contactUs/ContactUs";
import Form from "./pages/form/Form";

import Notfound from "./pages/Notfound";
import MapComponent from "./components/map/MapComponent";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<ContactUs />} />
          <Route path="/form" element={<Form />} />
          <Route path="/map" element={<MapComponent />} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
