/**
 * Copyright (c) 2019, Progrema Studio. All rights reserved.
 */

import React, { Component } from "react";

export default class OlderPager extends Component {
  render() {
    return (
      <div>
        {this.props.offset + 4 < this.props.length ? (
          <div>
            <span
              className="btn btn-primary float-right"
              onClick={() => this.props.onOlderPagesClick()}
            >
              Older Posts →
            </span>
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}
