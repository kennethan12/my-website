import React, { Component } from 'react';
import { Link } from 'react-scroll'

class IntroPage extends Component {

  render() {
    return (
      <div class="showcase">
        <div className="image-container"></div>
        <div class="content">
          <p class="intro-greeting">Hi, I'm</p>
          <h1>KENNETH AN</h1>
          <Link to='about' class="button-slide" smooth duration={700}>Who?</Link>
        </div>
      </div>
    )
  }

}

export default IntroPage;