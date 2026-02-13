import React, { Component } from 'react';
import Wrapper from '../../gallery/Wrapper';
import { imgCloudEducation } from '../../gallery/collections/cloudEducation';
import { imgS3E2 } from "../../gallery/collections/s3e2";
import { imgVefa } from "../../gallery/collections/vefa";
import { imgUnnamed } from "../../gallery/collections/unnamed";
import { imgExaplay } from "../../gallery/collections/exaplay";

//CSS
import './main.css';

export default class Work extends Component {
  render() {
    return (
      <section className="shompi_section">
        <div className="shompi_section_content">
          <div className="shompi_main_title">
            <span>Last works</span>
            <h3>My Works</h3>
          </div>
          <div className="texts">

            <div className="projectv2">
              <div className='date'>03/2024 - Present</div>
              <div className='position'>Center Senior Developer</div>
              <div className='company'>NTT DATA Europe & Latam.</div>
              <div className='description'>
                <div className='shortdesc'>
                  Key role in the Digital Center, assigned to LATAM Airlines' ANDES Engineering Platform.
                </div>
                <ul>
                  <li><strong>Platform Engineering:</strong> Develop and maintain the ANDES Engineering Platform, creating robust tools, libraries, and centralized services that empower product squads to build and deploy software efficiently and according to standards. Focus on improving developer experience and operational excellence.</li>
                  <li><strong>Enterprise Architecture:</strong> Collaborate in the definition and implementation of Squad Guidelines and Frameworks, ensuring that development teams have clear technical direction. Work on standardizing patterns, practices, and technologies across the organization to ensure scalability, security, and maintainability of the ecosystem.</li>
                </ul>
              </div>
              <div className='stack'>
                <div className='title'>Technology</div>
                <a href="https://www.java.com/" target="blank__"><i class="devicon-java-plain colored"></i></a>
                <a href="https://spring.io/" target="blank__"><i class="devicon-spring-plain colored"></i></a>
                <a href="https://cloud.google.com/" target="blank__"><i class="devicon-google-plain colored"></i></a>
                <a href="https://kubernetes.io/" target="blank__"><i class="devicon-kubernetes-plain colored"></i></a>
                <a href="https://www.docker.com/" target="blank__"><i class="devicon-docker-plain colored"></i></a>
                <a href="https://www.python.org/" target="blank__"><i class="devicon-python-plain colored"></i></a>
                <a href="https://www.mongodb.com/" target="blank__"><i class="devicon-mongodb-plain colored"></i></a>
                <a href="https://www.postgresql.org/" target="blank__"><i class="devicon-postgresql-plain colored"></i></a>
                <a href="https://golang.org/" target="blank__"><i class="devicon-go-plain colored"></i></a>
                <a href="https://cloud.google.com/run" target="blank__" title="Google Cloud Run"><i class="devicon-google-plain colored"></i></a>
                <a href="https://cloud.google.com/sql" target="blank__" title="Google Cloud SQL"><i class="devicon-mysql-plain colored"></i></a>
              </div>
            </div>

            <div className="projectv2">
              <div className='date'>01/2022 - 08/2024</div>
              <div className='position'>Software Engineer</div>
              <div className='company'>Unnamed AI.</div>
              <div className='description'>
                <div className='shortdesc'>
                  Lead Engineer and Technical Consultant for high-impact AI and software solutions.
                </div>
                <ul>
                  <li><strong>Technical Leadership:</strong> Led a multidisciplinary team of developers, overseeing code quality, architectural decisions, and sprint planning.</li>
                  <li><strong>AI Integration:</strong> Designed and implemented backend systems using Python, integrating LLMs and AI agents into business workflows.</li>
                  <li><strong>Full Cycle Development:</strong> Managed the complete software lifecycle from requirement gathering with stakeholders to production deployment.</li>
                  <li><strong>Mentorship:</strong> Mentored junior engineers, fostering a culture of continuous learning and best practices in software engineering.</li>
                </ul>
              </div>
              <div className='stack'>
                <div className='title'>Technology</div>
                <a href="https://www.python.org/" target="blank__"><i class="devicon-python-plain colored"></i></a>
                <a href="https://reactjs.org/" target="blank__"><i class="devicon-react-original colored"></i></a>
                <a href="https://www.docker.com/" target="blank__"><i class="devicon-docker-plain colored"></i></a>
                <a href="https://git-scm.com/" target="blank__"><i class="devicon-git-plain colored"></i></a>
              </div>
            </div>

            <div className="projectv2">
              <div className='date'>09/2021 - 03/2024</div>
              <div className='position'>Senior Frontend Engineer</div>
              <div className='company'>VIOSO GmbH.</div>
              <div className='description'>
                <div className='shortdesc'>
                  In this position my main functions were:
                </div>
                <ul>
                  <li> Develop Frontend of Exaplay V2 application for VIOSO (vioso.com) with VueJS 3. [<a href='https://drive.google.com/file/d/1PaWfe9-cNC4NVwhD7ZHoyhv97FWw8xx5/view?usp=sharing' target='blank__'>Demo video</a>]. </li>
                  <li> Develop Frontend of Exaplay V1 application for VIOSO (vioso.com) with Vanilla JS. [<a href='https://www.youtube.com/watch?v=gSAtChdbwTg' target='blank__'>Demo video</a>]. </li>
                  <li> Manage customer requirements and present solutions through intelligent agents (LLM). </li>
                  <li> Manage the technology to be used taking into account the budget. </li>
                  <li> Provide intelligent agents (LLM) to solve specific customer tasks using languages such as (Python, Javascript[NodeJS]) or through platforms such as Streamlit. </li>
                  <li> Perform data analysis and subsequent development of predictive models (LightGBM, XGBoost). </li>
                  <li> Perform image preprocessing (labeling, normalization, data augmentation) for subsequent object detection model.</li>
                </ul>
              </div>
              <div className='stack'>
                <div className='title'>Technology</div>
                <a href="https://nodejs.org/" target="blank__"><i class="devicon-vuejs-plain colored"></i></a>
                <a href="https://www.javascript.com/" target="blank__"><i class="devicon-reactjs-plain colored"></i></a>
                <a href="https://www.mongodb.com/" target="blank__"><i class="devicon-mongodb-plain colored"></i></a>
              </div>
              <div className='gallery'>
                <div className='title'>Images of Exaplay V2 Project (vioso.com)</div>
                <Wrapper images={imgUnnamed} />
              </div>
              <div className='links'>
                <div className='title'>Video Demo</div>
                <a href="https://drive.google.com/file/d/1PaWfe9-cNC4NVwhD7ZHoyhv97FWw8xx5/view?usp=sharing" target='blank__' className='video-item'>
                  <i className='fa fa-file-video-o'></i> Exaplay V2 Demo
                </a>
              </div>
              <div className='gallery'>
                <div className='title'>Images of Exaplay V1 Project (vioso.com):</div>
                <Wrapper images={imgExaplay} />
              </div>
              <div className='links'>
                <div className='title'></div>
                <a href="https://www.youtube.com/watch?v=gSAtChdbwTg" target="blank__" className="video-item"><i className="fa fa-youtube-play"></i> VIOSO Tutorial: EXAPLAY - First look and full demo!</a>
              </div>
            </div>


            <div className="projectv2">
              <div className='date'>10/2020 - 08/2021</div>
              <div className='position'>Development Leader / Project Manager</div>
              <div className='company'>Verifa Fácil - VEFA SpA.</div>
              <div className='description'>
                <div className='shortdesc'>
                  In this position my main functions are:
                </div>
                <ul>
                  <li>Led and coordinated a team of 3 developers using Kanban and Lean.</li>
                  <li>I managed the financial resources of the project, meeting the established deadlines.</li>
                  <li>Manage the integration of technology from external companies to the project.</li>
                  <li>Manage the integration of the technology generated in the project towards clients.</li>
                </ul>
              </div>
              <div className='stack'>
                <div className='title'>Technology</div>
                <a href="https://nodejs.org/" target="blank__"><i class="devicon-nodejs-plain colored"></i></a>
                <a href="https://www.javascript.com/" target="blank__"><i class="devicon-javascript-plain colored"></i></a>
                <a href="https://www.mongodb.com/" target="blank__"><i class="devicon-mongodb-plain colored"></i></a>
                <a href="https://www.python.org/" target="blank__"><i class="devicon-python-plain colored"></i></a>
                <a href="https://www.nginx.com/" target="blank__"><i class="devicon-nginx-original colored"></i></a>
                <a href="https://www.docker.com/" target="blank__"><i class="devicon-docker-plain colored"></i></a>
                <a href="https://cloud.google.com/" target="blank__"><i class="devicon-google-plain colored"></i></a>
                <a href="https://cloud.google.com/" target="blank__"><i class="devicon-debian-plain colored"></i></a>
                <a href="https://cloud.google.com/" target="blank__"><i class="devicon-photoshop-plain colored"></i></a>
              </div>
              <div className='gallery'>
                <div className='title'>Images of VEFA Project (vefa.cl)</div>
                <Wrapper images={imgVefa} />
              </div>
              <div className='links'>
                <div className='title'>Videos</div>
                <a href="https://drive.google.com/file/d/163MTnUJSOS0gfgZ9EB-VGy2SatBNrWCt/view?usp=sharing" target="blank__" className="video-item"><i className="fa fa-file-video-o"></i> VEFA-SPOT.mp4</a> <br />
                <a href="https://drive.google.com/file/d/1rshwUuKcO7oSR45Vz9wIJSLVpEB06932/view?usp=sharing" target="blank__" className="video-item"><i className="fa fa-file-video-o"></i> PROCESO-DE-FIRMA-VEFA-CL.mp4</a> <br />
                <a href="https://drive.google.com/file/d/1RqrSCTIwYIFVxSYrK2viMZgj0QFeSUKy/view?usp=sharing" target="blank__" className="video-item"><i className="fa fa-file-video-o"></i> PROCESO-NOTARIO-VEFA-CL.mp4</a> <br />
              </div>
              <div className='links'>
                <div className='title'>Docs</div>
                <a href="https://drive.google.com/file/d/1sH4V2qIH4UaJYlNSeTMsExh9jCv497G6/view?usp=sharing" target="blank__" className="docs-items"><i className="fa fa-file-pdf-o"></i> CREACION DOCUMENTO Y FIRMA ELECTRONICA AUTORIZADA POR NOTARIO</a>
              </div>
            </div>

            <div className='projectv2'>
              <div className='date'>03/2017 - 08/2020</div>
              <div className='position'>Development Leader / Backend Developer</div>
              <div className='company'>FONDECYT Project of Initiation In Research 2017 No. 11170583. Universidad Catolica de Temuco</div>
              <div className='description'>
                <div className='shortdesc'>
                  In this position my main functions are:
                </div>
                <ul>
                  <li>Manage a team of 4 developers using the Scrum methodology.</li>
                  <li>Create and design Backend and Frontend architecture.</li>
                  <li>Configure production environments (Centos) to deploy applications.</li>
                  <li>Analyze and process data delivered by the MINEDUC.</li>
                  <li>Make the Data available through an API developed in GoLang.</li>
                  <li>Transcribe the different statistical indices used in the research into programming language.</li>
                  <li>Optimize the calculation of indices using parallelism techniques.</li>
                  <li>Optimize database (NoSQL) to perform faster reads and optimize the execution time of statistical indexes.</li>
                </ul>
              </div>
              <div className='stack'>
                <div className='title'>Technology</div>
                <a href="https://golang.org/" target="blank__"><i class="devicon-go-plain colored"></i></a>
                <a href="https://www.python.org/" target="blank__"><i class="devicon-python-plain colored"></i></a>
                <a href="https://www.mongodb.com/" target="blank__"><i class="devicon-mongodb-plain colored"></i></a>
                <a href="https://reactjs.org/" target="blank__"><i class="devicon-react-original colored"></i></a>
                <a href="https://www.nginx.com/" target="blank__"><i class="devicon-nginx-original colored"></i></a>
                <a href="https://www.javascript.com/" target="blank__"><i class="devicon-javascript-plain colored"></i></a>
              </div>
              <div className='gallery'>
                <div className='title'>Images of S3E2 Project (s3e2.cl)</div>
                <Wrapper images={imgS3E2} />
              </div>
              <div className='links'>
                <div className='title'>Website</div>
                <a href="https://s3e2.cl/app" target="blank__" className="docs-items"><i className="fa fa-globe"></i> S3E2 APP</a>
              </div>
            </div>

            <div className="projectv2">
              <div className='date'>08/2014  - 11/2015</div>
              <div className='position'>Development Leader / Backend Developer</div>
              <div className='company'>Random Network LTDA - Temuco, Chile.</div>
              <div className='description'>
                <div className='shortdesc'>
                  In this position my main functions are:
                </div>
                <ul>
                  <li>I led and coordinated a team of 3 developers, taking into account the requirements of our clients.</li>
                  <li>I managed the economic resources delivered by SERCOTEC.</li>
                  <li>I developed PHP modules for school management software.</li>
                </ul>
              </div>
              <div className='stack'>
                <div className='title'>Technology</div>
                <a href="https://www.php.net/" target="blank__"><i class="devicon-php-plain colored"></i></a>
                <a href="https://laravel.com/" target="blank__"><i class="devicon-laravel-plain colored"></i></a>
                <a href="https://www.ruby-lang.org" target="blank__"><i class="devicon-ruby-plain colored"></i></a>
                <a href="https://rubyonrails.org/" target="blank__"><i class="devicon-rails-plain colored"></i></a>
                <a href="https://www.postgresql.org/" target="blank__"><i class="devicon-postgresql-plain colored"></i></a>
                <a href="https://www.mysql.com/" target="blank__"><i class="devicon-mysql-plain colored"></i></a>
              </div>
              <div className='gallery'>
                <div className='title'>Images of CloudEducation Project (cloudeducation.cl)</div>
                <Wrapper images={imgCloudEducation} />
              </div>
              <div className='links'>
                <div className='title'>Videos</div>
                <a href="https://www.youtube.com/watch?v=xkR-rnGCelw" target="blank__" className="video-item"><i className="fa fa-youtube-play"></i> Spot - CloudEducation Perfil Administrativo</a> <br />
                <a href="https://www.youtube.com/watch?v=JEps-89ZcSE" target="blank__" className="video-item"><i className="fa fa-youtube-play"></i> Spot - CloudEducation Spot Apoderados</a> <br />
                <a href="https://www.youtube.com/watch?v=Yvmh_QTIpFc" target="blank__" className="video-item"><i className="fa fa-youtube-play"></i> Spot - CloudEducation Kiosko Autoconsulta</a> <br />
                <a href="https://www.youtube.com/watch?v=2JV1fgzM6co" target="blank__" className="video-item"><i className="fa fa-youtube-play"></i> Spot - CloudEducation Perfil Estudiante</a> <br />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}


