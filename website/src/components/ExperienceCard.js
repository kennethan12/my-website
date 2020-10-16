import React, { Component } from 'react'

class ExperienceCard extends Component {

  render() {
    let { logo, company, position, dates, description } = this.props;

    return (
      // <div class="container-fluid">
      //   <div className="experience">
      // <div class="row">
      //   <div id="logoCol" class="col-1">
      //     <img class="center" src={logo}></img>
      //   </div>
      //   <div class="col-11">
      //     <div class="row">
      //       <p>{company}</p>
      //     </div>
      //     <div class="row">
      //       <div class="col">
      //         <p>{position}</p>
      //       </div>
      //       <div class="col">
      //         <p>{dates}</p>
      //       </div>
      //     </div>
      //     <div class="row">
      //       {description}
      //     </div>
      //   </div>
      // </div>
      //   </div>
      // </div>
      <div class="container-experience">
        <div class="row">
          <div id="logoCol" class="img-experience">
            <img class="center" src={logo}></img>
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