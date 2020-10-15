import React, { Component } from 'react';
import AboutMe from './AboutMe';
import Avatar from './Avatar';

class AboutPage extends Component {

  render() {

    return (
      <div class="container-fluid" style={{ backgroundColor: "#EEEAE8", flexWrap: "wrap" }}>
        <div class="container">
          <div class="row">
            <div class="col">
              <p className="h2">About Me</p>
            </div>
          </div>
          <div class="row">
            <div className="underscore-light" />
          </div>
          <div class="row mt-4">
            <div class="col-lg-5 align-self-center"><Avatar /></div>
            <div class="col-lg-7 align-self-center"><AboutMe /></div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutPage;