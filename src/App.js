import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/NavBar";
import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainPage from "./pages/main";
import About from './pages/about'

function App() {
  return (
    <Router className="App">
      <Navbar />
      <Route exact path="/" component={MainPage} />
      <Route path="/about" component={About} />
    </Router>
  );
}

export default App;
