import React, { Component } from 'react';
import Project from './Project';
import orderbookImg from '../images/orderbook.png'
import superheroImg from '../images/superhero.png'
import flooringImg from '../images/flooring-orders.png';
import ctcImg from '../images/crack-the-code.png';

class PortfolioPage extends Component {

  state = {
    projects: [
      {
        image: orderbookImg,
        name: "Katacoin Live Orderbook",
        tools: "React.js, Bootstrap, Node.js, Socket.io, HTML, CSS, Java, Spring Boot, MySQL",
        link: 'https://github.com/kennethan12/orderbook'
      },
      {
        image: superheroImg,
        name: "Superhero Sightings",
        tools: "HTML, CSS, Thymeleaf, Java, Spring Boot, MySQL",
        link: 'https://github.com/kennethan12/superhero-sightings'
      },
      {
        image: flooringImg,
        name: "Flooring Orders Manager",
        tools: "Java, MVC",
        link: 'https://github.com/kennethan12/flooring-orders'
      },
      {
        image: ctcImg,
        name: "Crack The Code Game",
        tools: "Java, Spring Boot",
        link: "https://github.com/kennethan12/crackthecode"
      }
    ]
  }

  render() {
    let { projects } = this.state;

    return (
      <div class="container-fluid" style={{ backgroundColor: "#EEEAE8", flexWrap: "wrap" }}>
        <div class="container">
          <div class="row">
            <div class="col">
              <p className="h2">Portfolio</p>
            </div>
          </div>
          <div class="row">
            <div className="underscore-light" />
          </div>
          <div class="row">
            {projects.map((project) => {
              return (
                <Project
                  image={project.image}
                  name={project.name}
                  tools={project.tools}
                  link={project.link}
                />
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default PortfolioPage