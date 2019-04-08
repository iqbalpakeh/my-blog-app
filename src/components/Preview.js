/**
 * Copyright (c) 2019, Progrema Studio. All rights reserved.
 */

import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class Preview extends Component {
  render() {
    return (
      <div>
        <div className="post-preview">
          <Link to={"/posts/" + this.props.post.id}>
            <h2 className="post-title">{this.props.post.title}</h2>
            <h3 className="post-subtitle">{this.props.post.subtitle}</h3>
          </Link>
          <p className="post-meta">Posted on {this.props.post.date}</p>
        </div>
        <hr />
      </div>
    );
  }
}
