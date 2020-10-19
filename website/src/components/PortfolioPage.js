import React, { Component } from 'react';
import Project from './Project';
import orderbookImg from '../images/orderbook.png'
import superheroImg from '../images/superhero.png'
import flooringImg from '../images/flooring-orders.png';
import ctcImg from '../images/crack-the-code.png';
import vmImg from '../images/vending-machine.png';
import crosswordImg from '../images/crossword.png';
import localhostImg from '../images/localhost.png';

class PortfolioPage extends Component {

  state = {
    projects: [
      {
        image: orderbookImg,
        alt: "Screenshot of Orderbook project",
        name: "Katacoin Live Orderbook",
        tools: "React.js, Bootstrap, Node.js, Socket.io, HTML, CSS, Java, Spring Boot, MySQL",
        link: 'https://github.com/kennethan12/orderbook'
      },
      {
        image: superheroImg,
        alt: "Screenshot of Superhero Sightings project",
        name: "Superhero Sightings",
        tools: "HTML, CSS, Thymeleaf, Java, Spring Boot, MySQL",
        link: 'https://github.com/kennethan12/superhero-sightings'
      },
      {
        image: flooringImg,
        alt: "Screenshot of Flooring Orders project",
        name: "Flooring Orders Manager",
        tools: "Java, MVC",
        link: 'https://github.com/kennethan12/flooring-orders'
      },
      {
        image: ctcImg,
        alt: "Screenshot of Crack The Code Game project",
        name: "Crack The Code Game",
        tools: "Java, Spring Boot",
        link: "https://github.com/kennethan12/crackthecode"
      },
      {
        image: vmImg,
        alt: "Screenshot of Vending Machine project",
        name: "Vending Machine",
        tools: "React.js, JavaScript, HTML, CSS",
        link: 'https://github.com/kennethan12/vending-machine'
      },
      {
        image: crosswordImg,
        alt: "Sceenshot of Crossword project",
        name: "Crossword",
        tools: "Swift, Xcode",
        link: 'https://github.com/kennethan12/crossword'
      },
      {
        image: localhostImg,
        alt: "Screenshot of LocalHost project",
        name: "LocalHost: Excursion App",
        tools: "Ionic/Angular, Loopback 4, TypeScript, HTML, CSS, MySQL",
        link: 'https://github.com/kennethan12/uxperience-mobile'
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
          <div class="row mt-4 list__project">
            {projects.map((project) => {
              return (
                <Project
                  image={project.image}
                  alt={project.alt}
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