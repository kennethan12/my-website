import React, { Component } from 'react';
import avatar from '../images/avatar.png';

class Avatar extends Component {

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col">
            <img src={avatar} style={{ display: "flex", width: "100%" }}></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Avatar;