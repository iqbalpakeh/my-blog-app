/**
 * Copyright (c) 2019, Progrema Studio. All rights reserved.
 */

import React, { Component } from "react";
import data from "../../data/posts-preview.json";
import Preview from "../../components/Preview";
import OlderPager from "../../components/OlderPager";
import NewerPager from "../../components/NewerPager";

import img_1 from "./images/history-bg.jpg";

export default class History extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      preview: data.posts.filter(post => post.topic === "history"),  
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
                  <h1>History</h1>
                  <span className="subheading">
                    "A people without the knowledge of their past history,
                    origin and culture is like a tree without roots." - Marcus
                    Garvey
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
