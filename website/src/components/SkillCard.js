import React, { Component } from 'react';

class SkillCard extends Component {

  render() {
    let { img, alt, name } = this.props;
    return (
      <div class='skill'>
        <img class='skill__image' src={img} alt={alt}></img>
        <p class='skill__name'>{name}</p>
      </div>
    )
  }
}

export default SkillCard;