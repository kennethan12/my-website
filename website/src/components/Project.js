import React, { Component } from 'react';
import githubImg from '../images/github.png';

class Project extends Component {

  render() {
    const { image, name, tools, link } = this.props;

    return (
      <div className="project">
        <img className="project__image" src={image}></img>
        <div className="project__overlay project__overlay--blur">
          <div className="project__name">{name}</div>
          <p className="project__tools pr-3 pl-3">{tools}</p>
          <div style={{ width: '100%', textAlign: 'center' }}>
            <a href={link}>
              <img src={githubImg} style={{ width: '20%' }}></img>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;