import React, { Component } from 'react';
import Contacts from './Contacts'

class ContactPage extends Component {

  render() {

    return (
      <div id="contact" class="container-fluid" style={{ backgroundColor: "#2E3C47", flexWrap: "wrap" }}>
        <div class="container">
          <div class="row">
            <div class="col">
              <p className="h2" style={{ color: 'white' }}>Contact</p>
            </div>
          </div>
          <div class="row">
            <div className="underscore-white" />
          </div>
          <div class="row mt-4">
            <Contacts />
          </div>
          <div class="row">
            <div class='col copyright'>
              <p className="copyright__label">Kenneth An © 2020</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactPage;