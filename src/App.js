import React from "react";
import Header from "./Header";
import TinderCards from "./TinderCards";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route path="/">
          <TinderCards />
        </Route>
      </Router>
      {/* TINDER CARDS */}
      {/* BUTTONS AT BOTTOM*/}

      {/* CHAT SCREEN */}
      {/* INDIVIDUAL CHAT SCREEN */}
    </div>
  );
}

export default App;
