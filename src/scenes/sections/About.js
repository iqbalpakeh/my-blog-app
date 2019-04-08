/**
 * Copyright (c) 2019, Progrema Studio. All rights reserved.
 */

import React, { Component } from "react";

import img_1 from "./images/about-bg.jpeg";

export default class About extends Component {
  render() {
    return (
      <div>
        <header
          className="masthead"
          style={{ backgroundImage: "url(" + img_1 + ")" }}
        >
          <div className="overlay" />
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="page-heading">
                  <h1>About Us</h1>
                  <span className="subheading">This is what We do.</span>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <p>
                An electrical engineer by training turn to software engineer
                married a chemical engineer. He loves to code and she loves to
                read, and this is their joint attempt to preserve memories of
                living and thriving in the tropical islands
              </p>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}
