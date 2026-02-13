import React, { Component } from 'react';


export default class Awards extends Component {
  render() {
    return (
      <section className="shompi_section">
        <div className="shompi_section_content">
          <div className="shompi_main_title">
            <span>Last awards</span>
            <h3>Awards</h3>
          </div>
          <div className="texts">
            <ul className="list">

            </ul>
            <ul className="list">
              <li>October 2018</li>
              <li>DESAFIO UCT</li>
              <li>First place and $3.100.000CLP</li>
              <li>Iris Project: Network to search for stolen vehicles through the use of public transport and application to recognize license plates of Chilean vehicles in real time.</li>
            </ul>
            <ul className="list">
              <li>September 2018</li>
              <li>HACKAMERICAS CHILE BY Y4PT</li>
              <li>First Regional Place and National Finalist</li>
              <li>Iris Project: Network to search for stolen vehicles through the use of public transport and application to recognize license plates of Chilean vehicles in real time.</li>
            </ul>
            <ul className="list">
              <li>Junary 2015</li>
              <li>HACELERA HACK - LEAN STARTUP</li>
              <li>First place and entry to business incubator (Incubatec UFRO)</li>
              <li>Application to search for parking on the streets of a city.</li>
            </ul>
            <ul className="list">
              <li>August 2014</li>
              <li>SERCOTEC CHILE - SEED CAPITAL</li>
              <li>$2.500.000CLP</li>
              <li>Development of web platform for student data management.</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

