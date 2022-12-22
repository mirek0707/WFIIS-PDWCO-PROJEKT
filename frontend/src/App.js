import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Players from "./components/players";
import Clubs from "./components/clubs";
import PlayersRelated from "./components/playersRelated";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="main">
      <nav className="navbar navbar-expand navbar-dark bg-success ">
        <Link to={"/"} className="navbar-brand">
          Projekt PDwCO
        </Link>
        <div className="col d-flex justify-content-end align-items-start navbar-nav ml-auto">
          <li className="nav-item">
            <Link to={"/players"} className="nav-link">
              Wszyscy zawodnicy
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/clubs"} className="nav-link">
              Wszystkie kluby
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/playersRelated"} className="nav-link">
              Zawodnicy powiązani z klubem
            </Link>
          </li>
        </div>
      </nav>
      <div className="mt-3">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/players" element={<Players/>} />
          <Route path="/clubs" element={<Clubs/>} />
          <Route path="/playersRelated" element={<PlayersRelated/>} />
        </Routes>
      </div>

      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item"><Link to={"/"} className="nav-link px-2 text-muted">Strona główna</Link></li>
          <li className="nav-item"><Link to={"/players"} className="nav-link px-2 text-muted">Zawodnicy</Link></li>
          <li className="nav-item"><Link to={"/clubs"} className="nav-link px-2 text-muted">Kluby</Link></li>
          <li className="nav-item"><Link to={"/playersRelated"} className="nav-link px-2 text-muted">Zawodnicy powiązani z klubem</Link></li>
        </ul>
        <p className="text-center text-muted">2022, Mirosław Kołodziej</p>
      </footer>
    </div>
  );
}

export default App;
