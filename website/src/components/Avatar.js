import React, { Component } from 'react';
import avatar from '../images/avatar.png';

class Avatar extends Component {

  render() {
    return (
      <div class="container">
        <div class="row align-items-center">
          <div class="col align-self-center">
            <img src={avatar} class="center" style={{ display: "flex", width: "80%" }}></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Avatar;