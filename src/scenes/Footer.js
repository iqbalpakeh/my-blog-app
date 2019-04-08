/**
 * Copyright (c) 2019, Progrema Studio. All rights reserved.
 */

import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <ul className="list-inline text-center">
                <li className="list-inline-item">
                  <span className="span-link">
                    <span className="fa-stack fa-lg">
                      <i className="fas fa-circle fa-stack-2x" />
                      <i className="fab fa-twitter fa-stack-1x fa-inverse" />
                    </span>
                  </span>
                </li>
                <li className="list-inline-item">
                  <span className="span-link">
                    <span className="fa-stack fa-lg">
                      <i className="fas fa-circle fa-stack-2x" />
                      <i className="fab fa-facebook-f fa-stack-1x fa-inverse" />
                    </span>
                  </span>
                </li>
                <li className="list-inline-item">
                  <span className="span-link">
                    <span className="fa-stack fa-lg">
                      <i className="fas fa-circle fa-stack-2x" />
                      <i className="fab fa-github fa-stack-1x fa-inverse" />
                    </span>
                  </span>
                </li>
              </ul>
              <p className="copyright text-muted">
                Copyright &copy; The Islanders 2019 <br /> Version 2.0.2
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
