/**
 * Copyright (c) 2019, Progrema Studio. All rights reserved.
 */

import React, { Component } from "react";

export default class NewerPager extends Component {
  render() {
    return (
      <div>
        {this.props.offset - 4 >= 0 ? (
          <div>
            <span
              className="btn btn-primary float-left"
              onClick={() => this.props.onNewerPagesClick()}
            >
              ← Newer Posts
            </span>
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}
