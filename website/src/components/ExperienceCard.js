import React, { Component } from 'react'

class ExperienceCard extends Component {

  render() {
    let { logo, company, position, dates, description } = this.props;

    return (
      <div class="container-fluid">
        <div className="experience">
          <div class="row">
            <div id="logoCol" class="col-lg-1">
              <img class="center" src={logo}></img>
            </div>
            <div class="col-lg-11">
              <div class="row">
                <p>{company}</p>
              </div>
              <div class="row">
                <div class="col">
                  <p>{position}</p>
                </div>
                <div class="col">
                  <p>{dates}</p>
                </div>
              </div>
              <div class="row">
                {description}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ExperienceCard;