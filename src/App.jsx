import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      {/* <RegisterPage></RegisterPage> */}
      {/* <LoginPage></LoginPage> */}
      {/* <Cart></Cart> */}
      {/* <Pizza></Pizza> */}
      <Footer></Footer>
    </>
  );
}

export default App;
