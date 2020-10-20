import React, { Component } from 'react';

class AboutMe extends Component {

  render() {
    return (
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col align-self-center pt-3 pb-3" style={{ fontSize: '1.2em', fontWeight: '500' }}>
            <p>
              I’m a recent grad from Williams College looking for Full Stack Development opportunities!
            </p>
            <p>
              I am passionate about creating applications that are simple, intuitive, and tailored to user experience.
              Although backend implementation is where I am most comfortable, I love to pursue front-end challenges
              and observe them as learning opportunities. I also love to work in teams, receive help from others,
              and assist them back.
            </p>
            <p>
              Outside of coding, I love to make music, browse food pictures on Instagram, mess around with my dog, and work out.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutMe;