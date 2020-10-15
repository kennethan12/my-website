import React, { Component } from 'react';
import AboutMe from './AboutMe';
import Avatar from './Avatar';

class AboutPage extends Component {

  render() {
    const headingStyle = {
      fontWeight: "300",
      fontSize: "3rem"
    }

    return (
      <div class="container-fluid" style={{ backgroundColor: "#EEEAE8", flexWrap: "wrap" }}>
        <div class="container">
          <div class="row">
            <div class="col">
              <h2>About Me</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-5 align-self-center"><Avatar /></div>
            <div class="col-lg-7 align-self-center"><AboutMe /></div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutPage;