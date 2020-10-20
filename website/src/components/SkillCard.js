import React, { Component } from 'react';

class SkillCard extends Component {

  render() {
    let { img, alt, name } = this.props;
    return (
      <div id="skill" class='skill col-lg-2 col-md-3 col-sm-4 col-6-custom'>
        <img class='skill__image' src={img} alt={alt}></img>
        <p class='skill__name'>{name}</p>
      </div>
    )
  }
}

export default SkillCard;