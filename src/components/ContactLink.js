import React, { Component } from 'react';

class ContactLink extends Component {

  render() {
    let { link } = this.props;

    return (
      <div class="contact col-lg-6 col-md-6 col-sm-12 col-custom">
        <a href={link.link} target="_blank" rel='noopener noreferrer'>
          <img class="contact__image" src={link.image} alt={link.alt}></img>
          <p class="contact__link" style={{ lineHeight: '35px' }}>{link.text}</p>
        </a>
      </div>
    )
  }
}

export default ContactLink;