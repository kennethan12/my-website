import React, { Component } from 'react';
import Contacts from './Contacts'

class ContactPage extends Component {

  render() {

    return (
      <div class="container-fluid" style={{ backgroundColor: "#2E3C47", flexWrap: "wrap" }}>
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
        </div>
      </div>
    )
  }
}

export default ContactPage;