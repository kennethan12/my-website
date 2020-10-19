import React, { Component } from 'react';
import ExperienceCard from './ExperienceCard';
import mthreeLogo from '../images/mthree.png';
import ftlLogo from '../images/ftl.png';
import appstraxLogo from '../images/appstrax.png';
import dots from '../images/dots.png'

class ExperiencePage extends Component {
  state = {
    mthree: {
      logo: mthreeLogo,
      alt: "Mthree logo",
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
    },
    ftl: {
      logo: ftlLogo,
      alt: "Faster Than Light logo",
      company: "Faster Than Light",
      position: "Product/Business Development Intern",
      dates: "June 2019 - August 2019",
      description: <div>
        <p>
          Faster Than Light is a cybersecurity startup dedicated to providing a fast
          and easy-to-use online static analysis tool for programmers of any level.
        </p>
        <p>
          Faster Than Light exposed me to what it truly meant to work in a start-up
          environment. I wore many hats throughout my internship. I performed lots of
          user testing, many of which provided many feedback about the UI/UX of the
          startup’s BugCatcher product. I was assigned to think of useful features that
          could be tailored more towards amateurs and student coders, such as the
          integration of Github. Everyone in the team did quality assurance tests with
          every product iteration. I had to relearn Python to help debug the source
          code of the product. And lastly, I dedicated half of my time to reaching out
          to online developer communities such as blogs, podcasts, and Meetups for
          outreach purposes.
        </p>
        <p>
          The three most valuable skills I’ve gained throughout my experience was
          communication, organization, and teamwork. Because the internship was remote,
          I made sure to not bombard my boss with questions, since she was always busy
          with meetings. I only reached out whenever I couldn’t figure out the answers
          myself. I also made sure to keep a tight schedule, since I constantly had
          multiple tasks to keep track of. I learned how to be brief and succinct in
          cold emails. And lastly, I always updated my team with my progress.
        </p>
      </div>
    },
    appstrax: {
      logo: appstraxLogo,
      alt: "Appstrax Technology logo",
      company: "AppStrax Technology (Pyt) Ltd",
      position: "Full Stack Developer Intern",
      dates: "July 2018 - August 2018",
      description: <div>
        <p>
          AppStrax Technology is a full stack software development team dedicated to
          providing technical solutions to its clients. I was fortunate to work as a full
          stack intern under Miki, Co-founder and a full stack instructor of a bootcamp I
          was attending called iXperience.
        </p>
        <p>
          The AppStrax internship was my first tech industry experience as a coder. The
          fellow interns and I first worked on a general accounting API that would alleviate
          transaction traffic that one of AppStrax’s clients was facing. I worked heavily on
          the backend using MySQL and Loopback, a Node.js and TypeScript framework. I also
          worked on making basic CRUD functionalities for another one of AppStrax’s clients,
          Exmural, using the same language and framework.
        </p>
      </div>
    }
  }

  render() {
    let { mthree, ftl, appstrax } = this.state

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
          <div class="row mt-4">
            <ExperienceCard
              logo={mthree.logo}
              alt={mthree.alt}
              company={mthree.company}
              position={mthree.position}
              dates={mthree.dates}
              description={mthree.description}
            />
          </div>
          <div class="row">
            <img id="dots" class="center" src={dots} alt="Dots"></img>
          </div>
          <div class="row">
            <ExperienceCard
              logo={ftl.logo}
              alt={ftl.alt}
              company={ftl.company}
              position={ftl.position}
              dates={ftl.dates}
              description={ftl.description}
            />
          </div>
          <div class="row">
            <img id="dots" class="center" src={dots} alt="Dots"></img>
          </div>
          <div class="row">
            <ExperienceCard
              logo={appstrax.logo}
              alt={appstrax.alt}
              company={appstrax.company}
              position={appstrax.position}
              dates={appstrax.dates}
              description={appstrax.description}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default ExperiencePage;