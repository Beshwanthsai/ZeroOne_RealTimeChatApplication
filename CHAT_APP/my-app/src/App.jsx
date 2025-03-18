import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
