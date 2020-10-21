import React, { Component } from 'react'

class ExperienceCard extends Component {

  render() {
    let { logo, alt, company, position, dates, description } = this.props;

    return (
      <div class="container-experience">
        <div class="row">
          <div id="logoCol" class="img-experience">
            <img class="center" src={logo} alt={alt}></img>
          </div>
          <div class="company-experience">
            <div class="row pt-1 pl-3 pr-3">
              <p class="mb-0" style={{
                fontWeight: "500",
                fontSize: "1.3em",
                lineHeight: '100%'
              }}>
                {company}
              </p>
            </div>
            <div class="row pl-3 pr-3">
              <div class="col-sm pl-0">
                <p id="experience-position">{position}</p>
              </div>
              <div id="experience-dates"
                class="col-sm pl-0 pr-5">
                <p style={{ color: '#4B6B82' }}>{dates}</p>
              </div>
            </div>
            <div class="row pl-3 pr-5">
              {description}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ExperienceCard;