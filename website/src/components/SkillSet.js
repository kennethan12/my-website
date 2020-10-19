import React, { Component } from 'react';
import SkillCard from './SkillCard';

class SkillSet extends Component {

  render() {
    return (
      <div class='container'>
        <div class='row'>
          <div class='col-sm-4'>
            <p class='h3'>Front-end</p>
          </div>
          <div class='col-sm-8'>
            <SkillCard />
          </div>
        </div>
      </div>
    )
  }
}

export default SkillSet;