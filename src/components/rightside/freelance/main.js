import React, { Component } from 'react';
import Wrapper from '../../gallery/Wrapper';
import { imgAgrotop } from "../../gallery/collections/agrotop";
import { imgFrioCid } from "../../gallery/collections/friocid";
import { imgBautista } from "../../gallery/collections/bautista";
import { imgExaplay } from "../../gallery/collections/exaplay";
import { imgTerrazas } from "../../gallery/collections/terrazas";
import { imgDentalapp } from "../../gallery/collections/dentalapp";
import { imgMenuDigital } from "../../gallery/collections/menu";
import { imgKuubit } from "../../gallery/collections/kuubit";
import { imgIris } from "../../gallery/collections/iris";

export default class Freelance extends Component {
  render() {
    return (
      <section className="shompi_section">
        <div className="shompi_section_content">
          <div className="shompi_main_title">
            <span>My latest projects as a Freelance</span>
            <h3>Freelance Works</h3>
          </div>
          <div className="texts">
            <ul className="list project">
              <li>2019</li>
              <li>Web Application</li>
              <li>Empresas AgroTop</li>
              <li>
                This web application allows you to generate the process of sending different products to different countries.
                It generates a timeline with the necessary documentary processes for the products that are manufactured.
                The time limits for each documentary process are calculated based on previous times.
                These documentary processes are generated based on a date established by the customer that requires the
                product and the departure and arrival of the cargo ship for the different destination countries is calculated.
              </li>
              <li>
                Used technology: <br />
                <a href="https://nodejs.org/" target="blank__"><i class="devicon-nodejs-plain colored"></i></a>
                <a href="https://www.nginx.com/" target="blank__"><i class="devicon-nginx-original colored"></i></a>
                <a href="https://www.javascript.com/" target="blank__"><i class="devicon-javascript-plain colored"></i></a>
                <a href="https://www.mysql.com/" target="blank__"><i class="devicon-mysql-plain colored"></i></a>
              </li>
              <li>
                Images: <br />
                <Wrapper images={imgAgrotop} />
              </li>
            </ul>
            <ul className="list project">
              <li>2018</li>
              <li>Web Application - Computer Vision</li>
              <li>Iris</li>
              <li>
                This software consists of a computer vision system for license plate recognition and, on the other hand,
                a platform to display data on sightings of stolen vehicles.
                Our computer vision software looks for the patterns that have a Chilean license plate, in the different
                frames that are delivered to this module. After identifying a
                license plate, letters and numbers begin to be recognized by OCR (Optical Character Recognition).
                Our web application is responsible for displaying the data obtained and buying in the database of stolen
                vehicles if there is a match, generating an alert if there is a positive case.
                <br />
                <i><b>Note:</b> The system was developed in a 2-day hackathon.</i>
              </li>
              <li>
                Used technology: <br />
                <a href="https://www.tensorflow.org/" target="blank__"><i class="devicon-tensorflow-original colored"></i></a>
                <a href="https://www.python.org/" target="blank__"><i class="devicon-python-plain colored"></i></a>
                <a href="https://nodejs.org/" target="blank__"><i class="devicon-nodejs-plain colored"></i></a>
                <a href="https://www.nginx.com/" target="blank__"><i class="devicon-nginx-original colored"></i></a>
                <a href="https://www.javascript.com/" target="blank__"><i class="devicon-javascript-plain colored"></i></a>
                <a href="https://www.mysql.com/" target="blank__"><i class="devicon-mysql-plain colored"></i></a>
              </li>
              <li>
                Images: <br />
                <Wrapper images={imgIris} />
              </li>
              <li>
                Videos: <br />
                <a href="https://drive.google.com/file/d/11OEn7yHDIYJ-ZXrr1qLDp_LbE3Z4UfQQ/view?usp=sharing" target="blank__" className="video-item"><i className="fa fa-file-video-o"></i> GOD'S EYES.mp4</a>
              </li>
            </ul>
            <ul className="list project">
              <li>2016</li>
              <li>Web Application</li>
              <li>FrioCid</li>
              <li>
                This web application consists of being able to extract the products that exist in the CRM database of Prestashop
                and be able to generate a quotation system in line with this data. The user must register in the application to
                request a quote. The user selects the required products and then be sent to the application administrator.
                The administrator receives the request and the prices of the requested products are completed. Finally,
                the quote is sent to the user by email and with a registration in the application.
              </li>
              <li>
                Used technology: <br />
                <a href="https://www.php.net/" target="blank__"><i class="devicon-php-plain colored"></i></a>
                <a href="https://www.javascript.com/" target="blank__"><i class="devicon-javascript-plain colored"></i></a>
                <a href="https://www.mysql.com/" target="blank__"><i class="devicon-mysql-plain colored"></i></a>
                <a href="https://httpd.apache.org/" target="blank__"><i class="devicon-apache-plain colored"></i></a>
              </li>
              <li>
                Images: <br />
                <Wrapper images={imgFrioCid} />
              </li>
            </ul>
            <ul className="list project">
              <li>2016</li>
              <li>Desktop Application</li>
              <li>Colegio Bautista</li>
              <li>
                This desktop application consists of being able to establish interest for unpaid installments as well as to establish
                future interest for check payment cases. The application allows to establish student fees reduction. The values ​​of
                the tariffs are previously defined as well as the interest rate. These can be modified by the user who is operating
                the application.
              </li>
              <li>
                Used technology: <br />
                <a href="https://www.javascript.com/" target="blank__"><i class="devicon-javascript-plain colored"></i></a>
                <a href="https://www.w3.org/Style/CSS/" target="blank__"><i class="devicon-css3-plain colored"></i></a>
                <a href="https://www.w3.org/html/" target="blank__"><i class="devicon-html5-plain colored"></i></a>
              </li>
              <li>
                Images: <br />
                <Wrapper images={imgBautista} />
              </li>
            </ul>
            <ul className="list project">
              <li>2016</li>
              <li>Web Application</li>
              <li>DentalApp</li>
              <li>
                The web application consists of being able to receive the patient's dental record, personal data, general history,
                visual odontogram, documents such as radiographs, reports or others.
              </li>
              <li>
                Used technology: <br />
                <a href="https://nodejs.org/" target="blank__"><i class="devicon-nodejs-plain colored"></i></a>
                <a href="https://www.nginx.com/" target="blank__"><i class="devicon-nginx-original colored"></i></a>
                <a href="https://www.javascript.com/" target="blank__"><i class="devicon-javascript-plain colored"></i></a>
                <a href="https://www.postgresql.org/" target="blank__"><i class="devicon-postgresql-plain colored"></i></a>
              </li>
              <li>
                Images: <br />
                <Wrapper images={imgDentalapp} />
              </li>
            </ul>
            <ul className="list project">
              <li>2015</li>
              <li>Web Application</li>
              <li>Kuubit</li>
              <li>
                The purpose of this Kuubit project is to allow users to communicate with their coworkers, organize your project,
                save files in one place, in addition to synchronization with all project users. This platform was designed to
                work collaboratively on university projects.
              </li>
              <li>
                Used technology: <br />
                <a href="https://www.ruby-lang.org" target="blank__"><i class="devicon-ruby-plain colored"></i></a>
                <a href="https://rubyonrails.org/" target="blank__"><i class="devicon-rails-plain colored"></i></a>
                <a href="https://www.javascript.com/" target="blank__"><i class="devicon-javascript-plain colored"></i></a>
                <a href="https://www.w3.org/Style/CSS/" target="blank__"><i class="devicon-css3-plain colored"></i></a>
                <a href="https://www.w3.org/html/" target="blank__"><i class="devicon-html5-plain colored"></i></a>
              </li>
              <li>
                Images: <br />
                <Wrapper images={imgKuubit} />
              </li>
              <li>
                videos: <br />
                <a href="https://www.youtube.com/watch?v=gc0VPy8Sjm8" target="blank__" className="video-item"><i className="fa fa-youtube-play"></i> Kuubit Platform</a>
              </li>
            </ul>
            <ul className="list project">
              <li>2015</li>
              <li>Web Application - Android Application - Web Site.</li>
              <li>Restaurant las Terrazas</li>
              <li>
                The web application consists of being able to place orders using tablets so that these orders are sent directly
                to the kitchen where the order is printed to inform the cooks. The application has an administration system to
                be able to make the respective collections, as well as the profits for each waiter.
              </li>
              <li>
                Used technology: <br />
                <a href="https://www.php.net/" target="blank__"><i class="devicon-php-plain colored"></i></a>
                <a href="https://www.javascript.com/" target="blank__"><i class="devicon-javascript-plain colored"></i></a>
                <a href="https://www.mysql.com/" target="blank__"><i class="devicon-mysql-plain colored"></i></a>
                <a href="https://httpd.apache.org/" target="blank__"><i class="devicon-apache-plain colored"></i></a>
                <a href="https://www.android.com/" target="blank__"><i class="devicon-android-plain colored"></i></a>
                <a href="https://www.java.com/" target="blank__"><i class="devicon-java-plain colored"></i></a>
              </li>
              <li>
                Images: <br />
                <Wrapper images={imgTerrazas} />
              </li>
            </ul>
            <ul className="list project">
              <li>2014</li>
              <li>Web Application</li>
              <li>Menu Digital</li>
              <li>
                The web application consists of being able to make the request by telephone by telephone calls, the orders are
                received with the applicant's data and are sent directly to the cooks. The application has an administration
                system to perform the respective daily balances.
              </li>
              <li>
                Used technology: <br />
                <a href="https://www.php.net/" target="blank__"><i class="devicon-php-plain colored"></i></a>
                <a href="https://www.javascript.com/" target="blank__"><i class="devicon-javascript-plain colored"></i></a>
                <a href="https://www.mysql.com/" target="blank__"><i class="devicon-mysql-plain colored"></i></a>
                <a href="https://httpd.apache.org/" target="blank__"><i class="devicon-apache-plain colored"></i></a>
              </li>
              <li>
                Images: <br />
                <Wrapper images={imgMenuDigital} />
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}


