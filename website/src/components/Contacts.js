import React, { Component } from 'react';
import ContactLink from './ContactLink'
import email from '../images/contacts/email-white.png';
import github from '../images/contacts/github-white.png';
import linkedin from '../images/contacts/linkedin-white.png';
import twitter from '../images/contacts/twitter-white.png';

class Contacts extends Component {

  state = {
    links: [
      {
        image: email,
        alt: "Email icon",
        link: "mailto:kennethan12@gmail.com",
        text: "kennethan12@gmail.com"
      },
      {
        image: github,
        alt: "GitHub icon",
        link: "https://github.com/kennethan12",
        text: "github.com/kennethan12"
      },
      {
        image: linkedin,
        alt: "LinkedIn icon",
        link: "https://www.linkedin.com/in/kennethan12/",
        text: "linkedin.com/in/kennethan12"
      },
      {
        image: twitter,
        alt: "Twitter icon",
        link: "https://twitter.com/kennethan12",
        text: "twitter.com/kennethan12"
      }
    ]
  }

  render() {
    const { links } = this.state;

    return (
      <div id='contacts' class='container'>
        <div class='row'>
          {links.map((link) => {
            return (
              <ContactLink link={link} />
            )
          })}
        </div>
      </div>
    )
  }
}

export default Contacts;