import React, { Component } from 'react';
import SkillCard from './SkillCard';

class SkillSet extends Component {

  render() {
    const { setName, skills } = this.props;

    return (
      <div class='container' style={{ padding: "30px" }}>
        <div class='row'>
          <div class='col-sm-4'>
            <p class='h3'>{setName}</p>
          </div>
          <div class='col-sm-8'>
            <div class='skillset'>
              {skills.map((skill) => {
                return (
                  <SkillCard img={skill.image} alt={skill.alt} name={skill.name} />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SkillSet;