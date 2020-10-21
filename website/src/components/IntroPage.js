import React, { Component } from 'react';

class IntroPage extends Component {

  render() {
    return (
      <div class="showcase">
        <div className="image-container"></div>
        <div class="content">
          <p class="intro-greeting">Hi, I'm</p>
          <h1>KENNETH AN</h1>
          <a href='#about' class="button-slide">Learn More</a>
        </div>
      </div>
    )
  }

}

export default IntroPage;