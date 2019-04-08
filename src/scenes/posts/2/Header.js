/**
 * Copyright (c) 2019, Progrema Studio. All rights reserved.
 */

import React, { Component } from "react";

import img_1 from "./images/img-post-2-1.jpg";

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
                <h1>Empeng itu bahaya tidak ya?</h1>
                <h2 className="subheading">
                  Isu kontroversial di kalangan orang tua baru belakangan ini
                </h2>
                <span className="meta">Posted on February 3, 2019</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
