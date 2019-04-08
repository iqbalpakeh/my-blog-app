import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import Navigation from "./scenes/Navigation";
import Footer from "./scenes/Footer";

import Home from "./scenes/sections/Home";
import About from "./scenes/sections/About";
import Contact from "./scenes/sections/Contact";
import Health from "./scenes/sections/Health";
import History from "./scenes/sections/History";
import Technology from "./scenes/sections/Technology";
import Travel from "./scenes/sections/Travel";
import Books from "./scenes/sections/Books";

import Post0 from "./scenes/posts/0/Page";
import Post1 from "./scenes/posts/1/Page";
import Post2 from "./scenes/posts/2/Page";
import Post3 from "./scenes/posts/3/Page";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          {/* Generic path */}
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/health" component={Health} />
          <Route path="/history" component={History} />
          <Route path="/technology" component={Technology} />
          <Route path="/travel" component={Travel} />
          <Route path="/books" component={Books} />
          {/* Posts path */}
          <Route path="/posts/0" component={Post0} />
          <Route path="/posts/1" component={Post1} />
          <Route path="/posts/2" component={Post2} />
          <Route path="/posts/3" component={Post3} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
