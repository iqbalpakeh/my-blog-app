/**
 * Copyright (c) 2019, Progrema Studio. All rights reserved.
 */

import React, { Component } from "react";

import img_1 from "./images/img-post-1-1.jpeg";

export default class Header extends Component {
  render() {
    return (
      <header
        className="masthead"
        style={{ backgroundImage: "url(" + img_1 + ")" }}
      >
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="post-heading">
                <h1>Daging merah menyebabkan kanker?</h1>
                <h2 className="subheading">
                  Lantas, apakah kita harus berhenti mengkonsumsi daging merah
                  dan daging olahan?
                </h2>
                <span className="meta">Posted on February 2, 2019</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
