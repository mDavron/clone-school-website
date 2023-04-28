import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Layout from "./components/layout/Layout";
import About from "./pages/about/About";
import ContactUs from "./pages/contactUs/ContactUs";
import Form from "./pages/form/Form";
import Notfound from "./pages/notFound/Notfound";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<ContactUs />} />
          <Route path="/form" element={<Form />} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}
export default App;
