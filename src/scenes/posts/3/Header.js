/**
 * Copyright (c) 2019, Progrema Studio. All rights reserved.
 */

import React, { Component } from "react";

import img_1 from "./images/img-post-3-1.jpg";

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
                <h1>Depresi Pada Ibu Rumah Tangga</h1>
                <h2 className="subheading">
                  Kecenderungan merasa tidak berguna, terisolasi dari
                  masyarakat, dan terpenjara didalam rumah
                </h2>
                <span className="meta">Posted on January 28, 2019</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
