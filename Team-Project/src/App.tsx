import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/tailwind.css";
import "./styles/style.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import InfoPage from "./pages/InfoPage";
import HowPage from "./pages/HowPage";

import NavEvent from "./typings/navEvent";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <section className="drawer-content">
        <Header />
        <section className="main">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/info" element={<InfoPage />}></Route>
            <Route path="/how" element={<HowPage />}></Route>
          </Routes>
        </section>
        <Footer />
      </section>
    </BrowserRouter>
  );
};

window.onload = NavEvent;

export default App;
