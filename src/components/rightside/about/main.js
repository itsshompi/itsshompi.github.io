import React, { Component } from 'react';

//CSS
import './main.css';

export default class About extends Component {
  render() {
    return (
      <section className="shompi_section">
        <div className="shompi_section_content">
          <div className="shompi_main_title">
            <span>Information</span>
            <h3>About Me</h3>
          </div>
          <div className="texts mt-10px">
            <p>
              My name is <strong>Felipe Schneeberger</strong>, a Computer Science Engineer from Temuco, Chile, specializing in Machine Learning and software architecture.
              My expertise lies in bridging the gap between foundational engineering and the latest advancements in Machine Learning and Generative AI to build scalable, production-ready systems.
            </p>
            <p>
              My core technical strengths include the design and implementation of AI Agents and the development of robust engineering platforms.
              I have a proven track record of establishing technical governance, defining software development standards, and creating foundational architectures that streamline engineering processes in large-scale corporate environments.
            </p>
            <p>
              Beyond implementation, I focus on technical strategy and talent development. As a technical lead, I am responsible for defining technology roadmaps, establishing best practices, and mentoring developers.
              I am a highly adaptable professional with a strong ability to master complex technologies, always focused on delivering excellence.
            </p>
            <p>
              I specialize in the following technologies and tools: <br />
              <strong>
                <i class="ml-5px devicon-python-plain colored" title="Python"></i>
                <i class="ml-5px devicon-go-plain colored" title="GoLang"></i>
                <i class="ml-5px devicon-java-plain colored" title="Java"></i>
                <i class="ml-5px devicon-nodejs-plain colored" title="NodeJS"></i>
                <i class="ml-5px devicon-spring-plain colored" title="Spring Boot"></i>
                <i class="ml-5px devicon-google-plain colored" title="Google Cloud"></i>
                <i class="ml-5px devicon-kubernetes-plain colored" title="Kubernetes"></i>
                <i class="ml-5px devicon-docker-plain colored" title="Docker"></i>
                <i class="ml-5px devicon-mongodb-plain colored" title="MongoDB"></i>
                <i class="ml-5px devicon-postgresql-plain colored" title="PostgreSQL"></i>
              </strong>
            </p>
          </div>
        </div>
      </section>
    );
  }
}
