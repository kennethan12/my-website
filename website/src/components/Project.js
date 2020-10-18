import React, { Component } from 'react';

class Project extends Component {

  render() {
    const { image, name, tools, link } = this.props;

    return (
      <div className="project">
        <img src={image}></img>
      </div>
    );
  }
}

export default Project;