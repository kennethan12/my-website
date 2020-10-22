import React, { Component } from 'react';
import avatar from '../images/avatar.png';

class Avatar extends Component {

  render() {
    return (
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col align-self-center pt-3 pb-3">
            <img src={avatar} class="center" style={{ display: "flex", width: "80%" }} alt="Kenneth smiling in front of the Eiffel Tower"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Avatar;