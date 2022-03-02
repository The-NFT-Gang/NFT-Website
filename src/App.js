import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';

import Home from './pages/home';

import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;