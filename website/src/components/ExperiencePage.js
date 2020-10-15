import React, { Component } from 'react';
import ExperienceCard from './ExperienceCard'
import mthreeLogo from '../images/mthree.png'

class ExperiencePage extends Component {
  state = {
    mthree: {
      logo: mthreeLogo,
      company: "The Software Guild - Mthree",
      position: "Full Stack Java Developer Trainee",
      dates: "July 2020 - Present",
      description: <div>
        <p>
          I attended Mthree’s Aspire Scholarship program and its virtual
          Full Stack Java Development course. In a matter of 3 months, we attained the
          skills to build fully functional full stack applications. We learned core
          concepts such as Agile methodologies, Software Development Life Cycle, MVC
          Designs, CRUD applications, and ACID compliance.
        </p>
        <p>
          The training program
          replicated a work environment that consisted of daily stand-ups, weekly
          assignments for each course module, set hours of 9-5, and working in a
          consistent Agile workflow.
        </p>
        <p>
          We started with understanding Java and building
          MVC designs, then moving on to database tools such as <strong>SQL</strong>, <strong>JDBC Template</strong>, and <strong>JPA</strong>.
          We then explored the <strong>Spring Framework</strong> as well as <strong>Spring Boot</strong> and the concept of <strong>RESTful</strong> APIs.
          Finally, we dabbled on front-end technologies and frameworks, such as <strong>HTML5/CSS/JavaScript ES6</strong>, <strong>Node.js</strong>, <strong>React.js</strong>, <strong>Bootstrap</strong>, and <strong>Thymeleaf</strong>.
          And in the last three weeks, we learned to connect the database,
          back-end, and front-end together to create full stack applications.
        </p>
      </div>
    }
  }

  render() {
    let { mthree } = this.state

    return (
      <div class="container-fluid" style={{ backgroundColor: "#E2D5C0", flexWrap: "wrap" }}>
        <div class="container">
          <div class="row">
            <div class="col">
              <p className="h2">Experience</p>
            </div>
          </div>
          <div class="row">
            <div className="underscore-dark" />
          </div>
          <div class="row">
            <ExperienceCard
              logo={mthree.logo}
              company={mthree.company}
              position={mthree.position}
              dates={mthree.dates}
              description={mthree.description}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default ExperiencePage;