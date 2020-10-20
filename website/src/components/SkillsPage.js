import React, { Component } from 'react';
import SkillSet from './SkillSet'
import { SkillsData } from '../data/skills-data'

class SkillsPage extends Component {

  render() {
    return (
      <div class="container-fluid" style={{ backgroundColor: "#E2D5C0", flexWrap: "wrap" }}>
        <div class="container">
          <div class="row">
            <div class="col">
              <p className="h2">Skills</p>
            </div>
          </div>
          <div class="row">
            <div className="underscore-dark" />
          </div>
          <div class="row mt-4">
            {SkillsData.map((set) => {
              return (
                <SkillSet setName={set.setName} skills={set.skills} />
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default SkillsPage;