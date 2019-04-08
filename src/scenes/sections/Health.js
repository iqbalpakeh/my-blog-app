/**
 * Copyright (c) 2019, Progrema Studio. All rights reserved.
 */

import React, { Component } from "react";
import data from "../../data/posts-preview.json";
import Preview from "../../components/Preview";
import OlderPager from "../../components/OlderPager";
import NewerPager from "../../components/NewerPager";

import img_1 from "./images/health-bg.jpeg";

export default class Health extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      preview: data.posts.filter(post => post.topic === "health"), 
      offset: 0 
    };
    this.handleOlderPages = this.handleOlderPages.bind(this);
    this.handleNewerPages = this.handleNewerPages.bind(this);
  }

  handleOlderPages() {
    let current = this.state.offset;
    this.setState({ offset: current + 4 });
  }

  handleNewerPages() {
    let current = this.state.offset;
    this.setState({ offset: current - 4 });
  }

  render() {
    return (
      <div>
        <header
          className="masthead"
          style={{
            backgroundImage: "url(" + img_1 + ")"
          }}
        >
          <div className="overlay" />
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                  <h1>Health</h1>
                  <span className="subheading">
                    "Good health and good sense are two of life's greatest
                    blessings." - Publilius Syrus
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                {this.state.preview
                  .slice(this.state.offset, this.state.offset + 4)
                  .map(post => <Preview key={post.id} post={post} />)}
                <OlderPager
                  offset={this.state.offset}
                  length={this.state.preview.length}
                  onOlderPagesClick={this.handleOlderPages}
                />
                <NewerPager
                  offset={this.state.offset}
                  onNewerPagesClick={this.handleNewerPages}
                />
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    );
  }
}
