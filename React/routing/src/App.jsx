import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import User from "./User";
import NotFound from "./NotFound";
import Users from "./Users";
import NavBar from "./NavBar";
const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<User />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/products/:id" element={<Users />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
