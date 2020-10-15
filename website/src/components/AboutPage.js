import React, { Component } from 'react';
import AboutMe from './AboutMe';
import Avatar from './Avatar';

class AboutPage extends Component {

  render() {
    return (
      <div class="container-fluid" style={{ backgroundColor: "#EEEAE8", flexWrap: "wrap" }}>
        <div class="container">
          <div class="row">
            <h2>About Me</h2>
          </div>
          <div class="row">
            <div class="col-lg-5"><Avatar /></div>
            <div class="col-lg-7"><AboutMe /></div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutPage;